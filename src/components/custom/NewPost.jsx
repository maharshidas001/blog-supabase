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
} from "@/components/ui/select";
import { Button } from '../ui/button';

const NewPost = () => {
  return (
    <>
      <section className='w-full py-3 flex flex-col gap-3'>
        <div>
          <Label htmlFor='title'>Title</Label>
          <Input placeholder='Title...' className='font-medium' id='title' />
        </div>
        <div>
          <Label htmlFor='slug'>Slug</Label>
          <Input placeholder='Slug...' className='font-medium' id='slug' readOnly />
        </div>
        <div>
          <Label htmlFor='post-image'>Image</Label>
          <Input type='file' className='font-medium' id='post-image' readOnly />
        </div>
        <div>
          <Label htmlFor='content'>Content</Label>
          <Textarea id='content' placeholder='Content' className='h-[410px] resize-none' />
        </div>
        <div>
          <Label>Status</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Active</SelectItem>
              <SelectItem value="false">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='w-full sm:w-[200px] self-end'>
          <Button className='w-full'>Publish</Button>
        </div>
      </section>
    </>
  )
}

export default NewPost;