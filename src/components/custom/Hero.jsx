import React from 'react';
import { MaxContainer } from '../index';
import { Button } from '../ui/button';
import AssymetricParallel from '@/assets/Assymetric Parallel.svg';

const Hero = () => {
  return (
    <>
      <section>
        <MaxContainer>
          <div className='grid place-items-center py-3'>
            <p className='text-sm font-light'>The Blog</p>
            <h1 className='text-5xl md:text-6xl mt-4 font-bold text-center'><span className='bg-violet-300'>Writings</span> from our teams</h1>
            <p className='text-gray-500 mt-3'>The latest tech news and JavaScript news
              <img src={AssymetricParallel} alt="AssymetricParallel svg icon"
                className='relative hidden sm:block sm:-top-32 sm:-left-16'
              />
            </p>
            <Button className='mt-5 mx-auto'>Explore Blogs</Button>
          </div>
        </MaxContainer>
      </section>
    </>
  )
}

export default Hero;