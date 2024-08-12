import React, { useEffect } from 'react';
import { Header, Protected } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { AllPosts, CreatePost, Home, Login, NotFound, SinglePost, Dashboard, Signup } from '@/pages';
import { useDispatch } from 'react-redux';
import { login, logout } from './toolkit/slices/authSlice';
import { useUser } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();

  const { user, isSignedIn } = useUser();
  useEffect(() => {
    if (!isSignedIn) {
      dispatch(logout());
    } else if (isSignedIn) {
      dispatch(login({ isSignedIn, user: { id: user.id, name: user.fullName } }));
    }
  }, [isSignedIn]);

  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<AllPosts />} />
        <Route path='/post/:postSlug' element={<SinglePost />} />
        <Route element={<Protected />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;