import { EditPost, MaxContainer } from '@/components';
import React from 'react';
import { useSelector } from 'react-redux';

const UpdatePost = () => {

  const { singlePost } = useSelector(state => state.post);

  return (
    <>
      <main id='create-post'>
        <MaxContainer>
          <EditPost post={singlePost} />
        </MaxContainer>
      </main>
    </>
  )
}

export default UpdatePost;