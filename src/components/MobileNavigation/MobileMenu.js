'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Cart from '../Navbar/CartIcon'

export default function MobileMenu({ open, setOpen }) {
  const animateFrom = { opacity: 0, y: 30 }
  const animateTo = { opacity: 1, y: 0 }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      {open && (
        <div className='pt-40 text-4xl flex-col justify-start items-center fixed h-screen w-9/12 top-0 right-0 z-30 bg-white shadow-card mv:flex md:hidden list-none'>
          <motion.li
            className='mv:mb-16 md:mr-8'
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            onClick={() => {
              setOpen(false)
            }}
          >
            <Link
              className='cursor-pointer mv:mr-0'
              href='/artwork'
              style={{
                transform: isInView ? 'none' : 'translateY(20px)',
                transition: 'all 0.25s ease-in',
                opacity: isInView ? 'opacity-100' : 'opactity-0',
              }}
            >
              Artwork
            </Link>
          </motion.li>
          <motion.li
            className='mv:mb-16 md:mr-8'
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.4 }}
            onClick={() => {
              setOpen(false)
            }}
          >
            <Link
              className='cursor-pointer mv:mr-0'
              href='/signin'
              style={{
                transform: isInView ? 'none' : 'translateY(20px)',
                transition: 'all 0.25s ease-in',
                opacity: isInView ? 'opacity-100' : 'opactity-0',
              }}
            >
              Sign In
            </Link>
          </motion.li>
          <motion.li
            className='mv:mb-52 md:mr-8'
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.6 }}
            onClick={() => {
              setOpen(false)
            }}
          >
            <Link
              className='cursor-pointer mv:mr-0'
              href='signup'
              style={{
                transform: isInView ? 'none' : 'translateY(20px)',
                transition: 'all 0.25s ease-in',
                opacity: isInView ? 'opacity-100' : 'opactity-0',
              }}
            >
              Sign Up
            </Link>
          </motion.li>
          <Cart />
        </div>
      )}
    </>
  )
}
