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
import { set, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import supabaseService from '@/supabase/config';

const NewPost = (post = null) => {

  const [postImage, setPostImage] = useState();
  const [status, setStatus] = useState();

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: post ? post.title : '',
      slug: post ? post.slug : '',
      content: post ? post.content : '',
      // image: post ? post.image : '',
      // postStatus: post ? post.postStatus : ''
    }
  });

  const { user } = useSelector(state => state.auth);

  const submitPost = async (data) => {
    if (post) {
      const file = await supabaseService.uploadFile({ file: postImage });
      if (file) {
        supabaseService.deleteFile({ file: file.path });
      }
      const filePath = supabaseService.getImageUrl({ imagePath: file.path });
      const updatedPost = await supabaseService.updatePost(post.slug, { title, content, postStatus: true, image: filePath.publicUrl });
      // Toast on updated
    } else {
      const file = await supabaseService.uploadFile({ file: postImage });

      if (file) {
        const filePath = supabaseService.getImageUrl({ imagePath: file.path });
        const createdPost = await supabaseService.createPost({
          ...data,
          postStatus: status,
          image: filePath.publicUrl,
          authorId: user.id,
          authorName: user.name
        })
        // Toast on updated
      };
    }
  };

  const slugTransform = useCallback((value) => {
    return value.trim().toLowerCase().replace(/[\s]/g, '-');
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title, {
          shouldValidate: true
        }));
      }
    });

    return () => {
      subscription.unsubscribe();
    }
  }, [watch, slugTransform, setValue]);

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(submitPost)} className='w-full py-3 flex flex-col gap-3'>
          <div>
            <Label htmlFor='title'>Title</Label>
            <Input placeholder='Title...' className='font-medium' id='title' {...register('title', { required: true })} onInput={(e) => {
              setValue('slug', slugTransform(e.target.value), { shouldValidate: true })
            }} autoFocus />
          </div>
          <div>
            <Label htmlFor='slug'>Slug</Label>
            <Input placeholder='Slug...' className='font-medium' id='slug' readOnly {...register('slug', { required: true })} />
          </div>
          <div>
            <Label htmlFor='post-image'>Image</Label>
            <Input type='file' className='font-medium' id='post-image' accept='image/png, image/jpg, image/jpeg' onChange={(e) => setPostImage(e.target.files[0])} readOnly />
          </div>
          <div>
            <Label htmlFor='content'>Content</Label>
            <Textarea id='content' placeholder='Content' className='h-[410px] resize-none' {...register('content', { required: true })} />
          </div>
          <div>
            <Label>Status</Label>
            <Select>
              <SelectTrigger className="w-[180px]" onChange={(e) => setStatus(e.target.value)}>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='w-full sm:w-[200px] self-end'>
            <Button className='w-full' type='submit'>{post ? 'Update' : 'Publish'}</Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewPost;