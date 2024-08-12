import { MaxContainer } from '@/components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabaseService from '@/supabase/config';
import { useDispatch, useSelector } from 'react-redux';
import { setSinglePost, setLoading } from '@/toolkit/slices/postSlice';
import toast from 'react-hot-toast';

const SinglePost = () => {

  const { postSlug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    supabaseService.getPostById(postSlug)
      .then(res => {
        dispatch(setLoading(true));
        dispatch(setSinglePost({ singlePost: res[0] }));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        toast(error);
      });
  }, []);

  const { singlePost, isLoading } = useSelector(state => state.post);

  return (
    <>
      <main id='single-post'>
        <MaxContainer>
          <div className='flex flex-col items-center'>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <>
              <h1 className='text-5xl font-bold sm:text-center'
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >{singlePost.title}</h1>
              <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mt-6'>
                <img src={singlePost.image} alt="Image" className='w-full' />
              </div>
              <div className='inline-grid gap-2 mt-4'>
                {singlePost.content}
              </div>
              {/* {isAuthor && <div className='flex gap-2 mt-1'>
                <Button className='w-full'><PencilIcon /></Button>
                <Button className='w-full bg-red-600 hover:bg-red-500' onClick={handleDeletePost}><TrashIcon /></Button>
              </div>} */}
            </>}
          </div>
        </MaxContainer>
      </main>
    </>
  )
}

export default SinglePost;