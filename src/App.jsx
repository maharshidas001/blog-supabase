import React, { useEffect } from 'react';
import { Header, Protected } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { AllPosts, CreatePost, Home, Login, NotFound, SinglePost, Dashboard, Signup, UpdatePost } from '@/pages';
import { useDispatch } from 'react-redux';
import { login, logout } from './toolkit/slices/authSlice';
import { useUser, useAuth } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();

  const { user } = useUser();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      dispatch(logout());
    } else if (isLoaded && isSignedIn) {
      dispatch(login({ isSignedIn, user: { id: user.id, name: user.fullName } }));
    }
  }, [isSignedIn]);

  return (
    <>
      <Header />
      <Toaster position='bottom-right' toastOptions={{ duration: 1500 }} />
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<AllPosts />} />
        <Route path='/post/:postSlug' element={<SinglePost />} />
        <Route path='/update-post' element={<UpdatePost />} />
        <Route element={<Protected />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>}
    </>
  )
}

export default App;