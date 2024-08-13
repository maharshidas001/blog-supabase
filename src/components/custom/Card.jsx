import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
  return (
    <>
      <div className='border w-[340px] p-2 rounded'>
        <Link to={`/post/${post.slug}`}>
          <div className='h-[180px] w-full max-h-full flex justify-center rounded cursor-pointer'>
            <img src={post.image} alt="" className='max-w-full max-h-full' />
          </div>
        </Link>
        <div className='mt-1'>
          <Link to={`/post/${post.slug}`}>
            <p className='font-semibold cursor-pointer'>{post.title}</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card;