import React from 'react';
import { MaxContainer } from '..';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <>
      <section>
        <MaxContainer>
          <div className='grid place-items-center'>
            <p className='text-sm font-light mt-3'>The Blog</p>
            <h1 className='text-5xl md:text-6xl mt-4 font-bold text-center'>Writings from our teams</h1>
            <p className='text-gray-500 mt-3'>The latest tech news and JavaScript news</p>
            <Button className='mt-5 mx-auto'>Explore Blogs</Button>
          </div>
        </MaxContainer>
      </section>
    </>
  )
}

export default Hero;