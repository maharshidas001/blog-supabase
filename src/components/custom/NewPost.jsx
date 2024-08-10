import React from 'react';
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
import { useForm } from 'react-hook-form';

const NewPost = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitPost = () => { console.log(errors); };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(submitPost)} className='w-full py-3 flex flex-col gap-3'>
          <div>
            <Label htmlFor='title'>Title</Label>
            <Input placeholder='Title...' className='font-medium' id='title' {...register('title', { required: true })} autoFocus />
          </div>
          <div>
            <Label htmlFor='slug'>Slug</Label>
            <Input placeholder='Slug...' className='font-medium' id='slug' readOnly {...register('slug', { required: true })} />
          </div>
          <div>
            <Label htmlFor='post-image'>Image</Label>
            <Input type='file' className='font-medium' id='post-image' readOnly {...register('post-image')} />
          </div>
          <div>
            <Label htmlFor='content'>Content</Label>
            <Textarea id='content' placeholder='Content' className='h-[410px] resize-none' {...register('content', { required: true })} />
          </div>
          <div>
            <Label>Status</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" {...register('status', { required: true })} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>
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