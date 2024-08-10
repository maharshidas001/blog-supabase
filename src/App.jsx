import React from 'react';
import { Header } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { CreatePost, Home, Login } from '@/pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </>
  )
}

export default App;