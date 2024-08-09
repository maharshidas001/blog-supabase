import React from 'react';
import { Card, MaxContainer } from '../index';

const Posts = () => {
  return (
    <>
      <section className='p-2'>
        <MaxContainer>
          <div className='flex flex-wrap justify-evenly gap-3'>
            <Card />
          </div>
        </MaxContainer>
      </section>
    </>
  )
}

export default Posts;