import React from 'react';
import Travel from '@/assets/Travel.png';

const Card = () => {
  return (
    <>
      <div className='border max-w-[340px] p-2 rounded'>
        <div className='h-[180px] max-w-full rounded cursor-pointer'>
          <img src={Travel} alt="" className='w-full' />
        </div>
        <div className='mt-1'>
          <p className='font-semibold cursor-pointer'>The post title which written in vs code text editor</p>
        </div>
      </div>
    </>
  )
}

export default Card;