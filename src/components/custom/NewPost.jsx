import React, { useCallback, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import supabaseService from '@/supabase/config';

const NewPost = ({ post = null }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [postImage, setPostImage] = useState(null);

  const statusValueSet = (e) => {
    setStatus(e.target.value);
  };

  const postImageValueSet = (e) => {
    setPostImage(e.target.files[0]);
  };

  const { user } = useSelector(state => state.auth);

  const submitPost = async (e) => {
    e.preventDefault();
    // if (post) {
    //   const file = await supabaseService.uploadFile({ file: postImage });
    //   if (file) {
    //     supabaseService.deleteFile({ file: file.path });
    //   }
    //   const filePath = supabaseService.getImageUrl({ imagePath: file.path });
    //   const updatedPost = await supabaseService.updatePost(post.slug, { title, content, postStatus: true, image: filePath.publicUrl });
    //   // Toast on updated
    // } else {
    const file = await supabaseService.uploadFile({ file: postImage });

    if (file) {
      const filePath = supabaseService.getImageUrl({ imagePath: file.path });
      console.log(filePath);
      const createdPost = await supabaseService.createPost({
        title,
        content,
        slug,
        image: filePath.publicUrl,
        authorId: user.id,
        authorName: user.name
      })
      // Toast on Created
    };
    // }
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
            <Input placeholder='Title...' vlaue={title} onChange={(e) => setTitle(e.target.value)} className='font-medium' id='title' autoFocus />
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
            <Button className='w-full' type='submit'>Publish</Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewPost;