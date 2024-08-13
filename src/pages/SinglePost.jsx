import { MaxContainer } from '@/components';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import supabaseService from '@/supabase/config';
import { useDispatch, useSelector } from 'react-redux';
import { setSinglePost, setLoading } from '@/toolkit/slices/postSlice';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { PencilIcon, TrashIcon } from 'lucide-react';

const SinglePost = () => {

  const { postSlug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const { user } = useSelector(state => state.auth);

  const handleUpdatePost = () => {
    navigate('/update-post');
  };
  const handleDeletePost = () => {
    supabaseService.deletePost(postSlug)
      .then(res => {
        navigate('/');
        dispatch(setSinglePost([]));
        toast('Post Deleted');
      })
      .catch(error => {
        if (error) {
          toast('Cannot delete the post');
        }
      })

    supabaseService.deleteFile({ file: singlePost.image.split('/')[singlePost.image.split('/').length - 1] })
      .then(res => {
        if (res) {
          toast('Existing image deleted');
          return;
        }
      })
      .catch(error => {
        if (error) {
          toast('Error: Cannot deleted the existing image');
        }
      });
  };

  return (
    <>
      <main id='single-post'>
        <MaxContainer>
          <div className='flex flex-col items-center'>
            {isLoading && <p>Loading...</p>}
            {(!isLoading && singlePost) && <>
              <h1 className='text-5xl font-bold sm:text-center'
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >{singlePost.title}</h1>
              <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mt-6'>
                <img src={singlePost.image} alt="Image" className='w-full' />
              </div>
              <div className='inline-grid gap-2 mt-4'>
                {singlePost.content}
              </div>
              {user && <>
                {user.id === singlePost.authorId && <div className='flex gap-2 mt-1'>
                  <Button className='w-full' onClick={handleUpdatePost}><PencilIcon /></Button>
                  <Button className='w-full bg-red-600 hover:bg-red-500' onClick={handleDeletePost}><TrashIcon /></Button>
                </div>}
              </>}
            </>}
          </div>
        </MaxContainer>
      </main>
    </>
  )
}

export default SinglePost;