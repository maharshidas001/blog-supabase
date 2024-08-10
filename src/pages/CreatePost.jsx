import { MaxContainer, NewPost } from '@/components';
import React from 'react';

const CreatePost = () => {
  return (
    <>
      <main id='create-post'>
        <MaxContainer>
          <NewPost />
        </MaxContainer>
      </main>
    </>
  )
}

export default CreatePost;