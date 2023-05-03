"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Need to install redux
// import { useDispatch } from 'react-redux'
// import { cartActions } from '../../features/cartSlice'

import MobileButton from '../MobileNavigation/MobileButton'
import MobileMenu from '../MobileNavigation/MobileMenu'

import Dropdown from './Dropdown'
import Cart from './CartIcon'
import logo from '../../../public/images/large-logo.webp'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // Need to install redux
  // const dispatch = useDispatch()
  // const clearCart = () => {
  //   dispatch(cartActions.clearCart)
  // }

  return (
    <nav className='w-full sticky z-40 top-0 flex justify-between items-center shadow-md py-6 bg-white z-100 mv:px-4 md:px-8 opacity-95'>
      <Link className='cursor-pointer mr-4' href='/'>
        <Image className='w-40' src={logo} alt='logo' />
      </Link>
      <div className='mv:hidden md:flex'>
        <div className='flex items-center'>
          <Link href='/illustrations' className='cursor-pointer mr-8'>
            Illustrations
          </Link>
          <Dropdown />
          <Cart />
        </div>
        {/* <button className='cursor' onClick={clearCart()}>
          reset
        </button> */}
      </div>
      <MobileButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Navbar
