import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MaxContainer } from '../index';
import Logo from '@/assets/Logo.svg';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { Plus } from 'lucide-react';

const Header = () => {

  const location = useLocation();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    let mobileNavMenu = document.getElementById('mobile-nav-menu');
    mobileNavMenu.classList.add('hidden');
  }, [location.pathname]);

  const handleNavToggle = () => {
    let mobileNavMenu = document.getElementById('mobile-nav-menu');
    mobileNavMenu.classList.toggle('hidden');
  };

  return (
    <>
      <header className='relative'>
        <MaxContainer>
          <nav className='w-full h-[56px] py-1 sm:py-2 flex items-center justify-between'>
            <Link to='/'>
              <div className="max-w-[100px]">
                <img src={Logo} alt="NodeBlog Logo" />
              </div>
            </Link>

            <div className='sm:flex items-center gap-3 hidden'>
              <p className='font-medium text-sm cursor-pointer'>Blog</p>
              {!isSignedIn && isLoaded ? (<Link to='/auth/login'>
                <Button variant='outline'>Login</Button>
              </Link>) : (<>
                <p className='font-medium text-sm cursor-pointer'>Dashboard</p>
                <Link to='/create-post'>
                  <Button className='font-medium text-sm cursor-pointer'><Plus size={15} className='mr-2' /> Write a Blog</Button>
                </Link>
                <UserButton />
              </>)}
            </div>

            <Button variant='ghost' className='p-0 sm:hidden'
              onClick={handleNavToggle}
            >
              <MenuIcon />
            </Button>
          </nav>
        </MaxContainer>
        <div id='mobile-nav-menu' className='absolute hidden w-full top-[44px] bg-teal-50 z-50'
          style={{ height: 'calc(100vh - 44px)' }}
        >
          <div className='w-full flex flex-col items-center gap-5 mt-4'>
            <p className='font-medium text-sm cursor-pointer'>Blog</p>
            <p className='font-medium text-sm cursor-pointer'>Dashboard</p>
            <Link to='/create-post'>
              <p className='font-medium text-sm cursor-pointer'>Write a Blog</p>
            </Link>
            <SignedOut>
              <Link to='/auth/login'>
                <Button variant='outline' className='w-28'>Login</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;