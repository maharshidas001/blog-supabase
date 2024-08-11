import React from 'react';
import Travel from '@/assets/Travel.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <div className='border max-w-[340px] p-2 rounded'>
        <Link to='/post/slug'>
          <div className='h-[180px] max-w-full rounded cursor-pointer'>
            <img src={Travel} alt="" className='w-full' />
          </div>
        </Link>
        <div className='mt-1'>
          <Link to='/post/slug'>
            <p className='font-semibold cursor-pointer'>The post title which written in vs code text editor</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card;