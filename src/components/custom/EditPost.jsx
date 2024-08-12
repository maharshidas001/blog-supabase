import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import supabaseService from '@/supabase/config';
import toast from 'react-hot-toast';

const EditPost = ({ post }) => {

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [slug, setSlug] = useState(post.slug);
  const [postImage, setPostImage] = useState(null);


  const postImageValueSet = (e) => {
    setPostImage(e.target.files[0]);
  };

  const submitPost = async (e) => {
    e.preventDefault();
    if (postImage == null) {
      const updatedPost = await supabaseService.updatePost(slug, { title, slug, content });
      if (updatedPost) {
        toast('Post Updated');
      }
    } else {
      const file = await supabaseService.uploadFile({ file: postImage });
      if (file) {
        supabaseService.deleteFile({ file: file.path });
      }
      const filePath = supabaseService.getImageUrl({ imagePath: file.path });
      const updatedPost = await supabaseService.updatePost(slug, { title, slug, content, image: filePath.publicUrl });
      if (updatedPost) {
        toast('Post Updated');
      }
    }
  };

  const slugTransform = (value) => {
    const finalValue = value.trim().toLowerCase().replace(/[\s]/g, '-');
    setSlug(finalValue);
  };

  return (
    <>
      <section>
        <form onSubmit={submitPost} className='w-full py-3 flex flex-col gap-3'>
          <div>
            <Label htmlFor='title'>Title</Label>
            <Input placeholder='Title...' vlaue={title} onChange={(e) => setTitle(e.target.value)} className='font-medium' id='title' />
            <Button onClick={() => slugTransform(title)} className='mt-3' type='button'>Make Slug</Button>
          </div>
          <div>
            <Label htmlFor='slug'>Slug</Label>
            <Input placeholder='Slug...' value={slug} className='font-medium' id='slug' readOnly />
          </div>
          <div>
            <Label htmlFor='post-image'>Image</Label>
            <Input type='file' className='font-medium' id='post-image' accept='image/png, image/jpg, image/jpeg' onChange={postImageValueSet} readOnly />
          </div>
          <div>
            <Label htmlFor='content'>Content</Label>
            <Textarea id='content' placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} className='h-[410px] resize-none' />
          </div>
          <div className='w-full sm:w-[200px] self-end'>
            <Button className='w-full' type='submit'>Update</Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default EditPost;