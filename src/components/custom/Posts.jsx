import React from 'react';
import { Card, MaxContainer } from '../index';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Posts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <section className='p-3'>
        <MaxContainer>
          <h2 className='font-bold text-3xl mb-2'>Recent Blogs</h2>
          <div className='flex flex-wrap justify-evenly gap-3'>
            {posts.slice(0, 6).map(post => (
              <Card key={post} />
            ))}
          </div>
          {posts.length >= 10 && (
            <Link to='/blogs'>
              <Button className='mt-4 w-52'>See All</Button>
            </Link>
          )}
        </MaxContainer>
      </section>
    </>
  )
}

export default Posts;