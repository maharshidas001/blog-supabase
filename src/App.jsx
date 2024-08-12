import React from 'react';
import { Header, Protected } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { AllPosts, CreatePost, Home, Login, NotFound, SinglePost, Dashboard, Signup } from '@/pages';

const App = () => {
  return (
    <>
      <Header />
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