import React from 'react';
import { Header } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from '@/pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;