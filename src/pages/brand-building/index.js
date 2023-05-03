import React from 'react'
import Contact from '@/layout/Contact'
import Image from 'next/image'
import brand11 from '../../../public/images/brand11.webp'
import branding2 from '../../../public/images/branding-2.webp'
import brand3 from '../../../public/images/brand3.webp'
import pp from '../../../public/images/theme-header-2.webp'
import Main from '@/components/Accordion/Main'

export default function index() {
  return (
    <>
      <div className='flex flex-col items-center mt-16'>
        <h1 className='text-5xl font-semibold mb-3'>Brand Building</h1>
        <p className='text-xl mb-3'>Let us help build your UI/UX</p>
        <p className='w-6/12 text-center'>
          Are you looking to take your design beyond the free illustrations we
          offer? Then take a journey with us into the Forbidden Forest and
          unlock your design&#39;s true potential.
        </p>
        <div className='flex mt-6'>
          <div className='bg-theme h-12 w-12 rounded-full'></div>
          <div className='bg-offwhite h-12 w-12 rounded-full mx-4'></div>
          <div className='bg-secondary h-12 w-12 rounded-full'></div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-60'>
        <p className='text-theme font-semibold mb-4'>FOR YOU</p>
        <h1 className='text-4xl text-center mb-4 w-5/12'>
          Need custom illustrations? We got you covered.
        </h1>
        <p className='text-center w-6/12'>
          It&#39;s time to stop using the same vector illustrations for your
          website. We make custom illustrations tailored to your{' '}
          <span className='text-secondary font-semibold'>brand</span>{' '}
          <span className='text-theme font-semibold'>colors.</span>
        </p>
        <div className='flex items-center justify-around mt-20 mv:flex-col-reverse md:flex-row'>
          <Image
            className='h-auto w-9/12'
            src={brand11}
            alt='vector branding concept illustration'
            priority
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-80'>
        <h1 className='text-4xl text-center mb-4 w-4/12'>
          How to get started with us
        </h1>
        <p className='text-center w-6/12'>
          If you want us to build you custom illustrations, please describe your
          needs in an email below and we will reach out to you.
        </p>
        <div className='flex items-center justify-around mt-20 mv:flex-col-reverse md:flex-row'>
          <Main />
          <Image
            className='h-auto w-6/12'
            src={branding2}
            alt='vector branding concept illustration'
          />
        </div>
      </div>
      <Contact padding='pt-44' />
    </>
  )
}
