import { Card, MaxContainer } from '@/components';
import supabaseService from '@/supabase/config';
import { setAllPosts, setLoading } from '@/toolkit/slices/postSlice';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const AllPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    supabaseService.getAllPosts()
      .then(res => {
        dispatch(setLoading(true));
        dispatch(setAllPosts({ allPosts: res }));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        toast(error);
      });
  }, []);

  const { allPosts, isLoading } = useSelector(state => state.post);

  return (
    <>
      <main id='all-posts' className='p-3'>
        <MaxContainer>
          <h2 className='font-bold text-3xl mb-2'>All Posts</h2>
          <div className='flex flex-wrap justify-evenly gap-3'>
            {isLoading && <p>Loading...</p>}
            {(allPosts && !isLoading) && <>
              {allPosts.map(post => (
                <Card key={post?.slug} post={post} />
              ))}
            </>}
          </div>
        </MaxContainer>
      </main>
    </>
  )
}

export default AllPosts;