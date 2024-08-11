import { Card, MaxContainer } from '@/components';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <main id='dashboard'>
        <MaxContainer>
          <h2 className='font-bold text-3xl mb-2'>Author Blogs</h2>
          <div className='w-full flex flex-wrap justify-evenly gap-3'>
            <Card isAuthor={true} />
          </div>
        </MaxContainer>
      </main>
    </>
  )
}

export default Dashboard;