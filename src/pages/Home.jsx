import React from 'react';
import { Hero, Posts } from '@/components';

const Home = () => {
  return (
    <>
      <main id='home'>
        <Hero />
        <Posts />
      </main>
    </>
  )
}

export default Home;