'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import smile from '../../../public/images/smile.webp'
import Copyright from '../Copyright'

export default function MobileMenu({ open, setOpen }) {
  const animateFrom = { opacity: 0, y: 30 }
  const animateTo = { opacity: 1, y: 0 }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div
        className={`py-40 text-4xl flex-col justify-between items-center fixed h-screen w-10/12 top-0 right-0 z-30 bg-white shadow-card mv:flex md:hidden transition duration-250 ease-in list-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-center'>
          <Link
            className='cursor-pointer mv:mr-0 mb-16 hover:underline'
            href='/about'
            onClick={() => {
              setOpen(false)
            }}
          >
            About
          </Link>
          <Link
            className='cursor-pointer mv:mr-0 mb-16 hover:underline'
            href='/hire-us'
            onClick={() => {
              setOpen(false)
            }}
          >
            Hire us
          </Link>
          <Link
            className='cursor-pointer mv:mr-0 hover:underline'
            href='/illustrations'
            onClick={() => {
              setOpen(false)
            }}
          >
            Illustrations
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image className='w-16 h-16 mb-8' src={smile} alt='smiley face' />
          <Copyright />
        </div>
      </div>
    </>
  )
}
