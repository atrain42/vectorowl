import React, {useRef} from 'react'
import Link from 'next/link'
import Contact from '@/layout/Contact'
import Image from 'next/image'
import brand11 from '../../../public/images/brand11.webp'
import branding12 from '../../../public/images/branding12.webp'
import branding2 from '../../../public/images/branding-2.webp'
import branding69 from '../../../public/images/branding69.webp'
import Main from '@/components/Accordion/Main'
import Form from '@/components/Form/Form'

export default function index() {
  // const ref = useRef(null)
  const scrollToForm = () => ref.current?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div className='px-8'>
      <header className='flex items-center mv:px-8 mv:flex-col-reverse mv:justify-center mv:pt-8 md:flex-row md:justify-evenly md:pt-20'>
        <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100 text-center'>
          <p className='text-theme font-semibold mb-4'>FOR YOU</p>
          <h1 className='text-5xl'>
            <strong>Brand building</strong>
          </h1>
          <p className='mt-5 text-lg w-full'>
            Are you looking to take your design beyond the free illustrations we
            offer? Then take a journey with us into the Forbidden Forest and
            unlock your design&#39;s true potential.
          </p>
          {/* <p>
          Today, so many websites are using the same style of vector images. We
          are here to disrupt that trend.
        </p> */}
          <div className='grid grid-cols-1 mt-8 gap-x-9 gap-y-9 font-button place-items-center text-md tracking-wider'>
            <button
              className='shadow-button w-44 mx-auto rounded font-poppins font-normal py-4 bg-theme text-white hover:scale-102 transition-all ease-in duration-50'
              onClick={scrollToForm}
            >
              Get started
            </button>
          </div>
        </div>
        <div className='mv:ml-0 mv:h-full mv:w-full md:ml-4 md:h-200 md:w-auto mv:mb-12 md:mb-0'>
          <Image
            className='mv:h-5/6 mv:w-5/6 md:h-full md:w-auto mv:mx-auto'
            src={branding12}
            alt='platform'
            priority
          />
        </div>
      </header>
      {/* <div className='hire-landing flex flex-col items-center justify-center'>
        <p className='text-theme font-semibold mb-4'>FOR YOU</p>
        <h1 className='text-5xl font-semibold mb-3'>Brand Building</h1>
        <p className='text-xl mb-3 font-medium'>Let us help build your UI/UX</p>
        <p className='mv:w-full sm:w-500 text-center'>
          Are you looking to take your design beyond the free illustrations we
          offer? Then take a journey with us into the Forbidden Forest and
          unlock your design&#39;s true potential.
        </p>
        <div className='flex mt-6'>
          <div className='bg-theme h-12 w-12 rounded-full'></div>
          <div className='bg-offwhite h-12 w-12 rounded-full mx-4'></div>
          <div className='bg-secondary h-12 w-12 rounded-full'></div>
        </div>
      </div> */}
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-72'>
        <h1 className='text-4xl text-center mb-4 w-100'>
          Need custom illustrations? We got you covered.
        </h1>
        <p className='text-center mv:w-full sm:w-500'>
          If you want illustrations tailored to your brand, we got you covered.
          We make custom illustrations tailored to your{' '}
          <span className='text-secondary font-semibold'>brand</span>{' '}
          <span className='text-theme font-semibold'>colors.</span>
        </p>
        <div className='flex items-center justify-around mt-16 mv:flex-col-reverse md:flex-row'>
          <Image
            className='h-auto mv:w-full sm:w-9/12'
            src={brand11}
            alt='vector branding concept illustration'
            priority
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-72'>
        <h1 className='text-4xl text-center mb-4 w-100'>
          Upgrade your project&#39;s graphics
        </h1>
        <p className='text-center mv:w-full sm:w-500'>
          Our custom illustrations will leave a lasting impression on anyone who
          comes across them. Below are common questions regarding custom images.
        </p>
        <div className='flex items-center justify-around mt-16 mv:flex-col-reverse md:flex-row'>
          <Main />
          <Image
            className='h-auto mv:w-full sm:w-6/12'
            src={branding2}
            alt='vector branding concept illustration'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-72'>
        <h1 className='text-4xl text-center mb-4 w-100'>
          Why choose Vector Owl?
        </h1>
        <p className='text-center mv:w-full sm:w-500'>
          We create graphic illustrations that will leave a lasting impression
          on your users. We will work with you at every step to ensure that the
          illustrations we create fit your project&#39;s vision.
        </p>
        <div className='flex items-center justify-around mt-16 mv:flex-col-reverse md:flex-row'>
          <Image
            className='h-auto mv:w-full sm:w-9/12'
            src={branding69}
            alt='vector branding concept illustration'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-72'>
        <h1 className='text-4xl text-center mb-4 w-4/12'>
          Let&#39;s get started
        </h1>
        <p className='text-center mv:w-full sm:w-500'>
          Don&#39;t wait any longer. Fill out the form below and we will review
          your request and respond via email.
        </p>
      </div>
      <Form />
    </div>
  )
}
