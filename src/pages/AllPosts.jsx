import { Card, MaxContainer } from '@/components';
import React from 'react';

const AllPosts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <section className='p-3'>
        <MaxContainer>
          <h2 className='font-bold text-3xl mb-2'>All Posts</h2>
          <div className='flex flex-wrap justify-evenly gap-3'>
            {posts.map(post => (
              <Card key={post} />
            ))}
          </div>
        </MaxContainer>
      </section>
    </>
  )
}

export default AllPosts;