"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MobileButton from '../MobileNavigation/MobileButton'
import MobileMenu from '../MobileNavigation/MobileMenu'

import Dropdown from './Dropdown'
import logo from '../../../public/images/large-logo.webp'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='w-full sticky z-40 top-0 flex justify-between items-center shadow-md py-6 bg-white z-100 mv:px-4 md:px-8 h-20'>
      <Link className='cursor-pointer mr-4' href='/'>
        <Image className='w-40' src={logo} alt='logo' />
      </Link>
      <div className='mv:hidden md:flex'>
        <div className='flex items-center'>
          <Link
            href='/hire-us'
            className='cursor-pointer mr-8 p-2 nav-link'
          >
            Hire us
          </Link>
          <Link
            href='/illustrations'
            className='cursor-pointer mr-8 p-2 nav-link'
          >
            Illustrations
          </Link>
          <Dropdown />
        </div>
      </div>
      <MobileButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Navbar
