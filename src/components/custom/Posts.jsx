import React, { useEffect } from 'react';
import { Card, MaxContainer } from '../index';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPosts, setLoading } from '@/toolkit/slices/postSlice';
import supabaseService from '@/supabase/config';
import toast from 'react-hot-toast';

const Posts = () => {

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
      <section className='p-3'>
        <MaxContainer>
          <h2 className='font-bold text-3xl mb-2'>Recent Blogs</h2>
          <div className='flex flex-wrap justify-evenly gap-3'>
            {isLoading && <p>Loading...</p>}
            {(allPosts && !isLoading) && <>
              {allPosts.slice(0, 6).map(post => (
                <Card key={post?.slug} post={post} />
              ))}
            </>}
          </div>
          {allPosts.length >= 10 && (
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