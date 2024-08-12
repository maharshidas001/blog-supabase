import { Card, MaxContainer } from '@/components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthorPost, setLoading } from '@/toolkit/slices/postSlice';
import supabaseService from '@/supabase/config';
import toast from 'react-hot-toast';

const Dashboard = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    supabaseService.getPostsByAuthor(user.id)
      .then(res => {
        dispatch(setLoading(true));
        dispatch(setAuthorPost({ authorPost: res }));
        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        toast(error);
      });
  });

  const { authorPost, isLoading } = useSelector(state => state.post);

  return (
    <>
      <main id='dashboard'>
        <MaxContainer>
          <h2 className='font-bold text-3xl mb-2'>Author Blogs</h2>
          <div className='w-full flex flex-wrap justify-evenly gap-3'>
            {isLoading && <p>Loading..</p>}
            {authorPost.length !== 0 ? <>
              {authorPost.map(post => (
                <Card key={post.slug} isAuthor={true} post={post} />
              ))}
            </> : <p>No Posts...</p>}
          </div>
        </MaxContainer>
      </main>
    </>
  )
}

export default Dashboard;