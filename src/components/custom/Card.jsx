import React from 'react';
import Travel from '@/assets/Travel.png';

const Card = () => {
  return (
    <>
      <div className='border max-w-[340px] p-2 rounded'>
        <div className='h-[180px] max-w-full rounded'>
          <img src={Travel} alt="" />
        </div>
        <div className='mt-1'>
          <p className='font-semibold'>The Post title</p>
        </div>
      </div>
    </>
  )
}

export default Card;