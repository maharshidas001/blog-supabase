import React from 'react';

const MaxContainer = ({ children }) => {
  return (
    <>
      <div className='w-full max-w-screen-lg mx-auto px-3'>
        {children}
      </div>
    </>
  )
}

export default MaxContainer;