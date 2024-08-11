import React from 'react';
import { Header } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { AllPosts, CreatePost, Home, Login, NotFound, SinglePost } from '@/pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/blogs' element={<AllPosts />} />
        <Route path='/post/:postSlug' element={<SinglePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;