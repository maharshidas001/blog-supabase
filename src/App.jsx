import React from 'react';
import { Header } from '@/components';
import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;