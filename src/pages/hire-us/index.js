import React from 'react'
import Image from 'next/image'
import brand11 from '../../../public/images/brand11.webp'
import branding2 from '../../../public/images/branding-2.webp'
import branding69 from '../../../public/images/branding69.webp'
import Main from '@/components/Accordion/Main'
import Form from '@/components/Form/Form'

export default function index() {
  const ref = React.createRef(null)
  const scrollToForm = () => {
    const container = ref.current
    const offsetTop = container.offsetTop - 150 // Apply offset of 100 pixels

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <div className='px-8 mb-40'>
      <div className='hire-landing flex flex-col items-center justify-center mv:mt-16 md:mt-32'>
        <p className='text-theme font-semibold mb-3 text-lg'>FOR YOU</p>
        <h1 className='text-7xl font-semibold mb-3 text-center'>
          <span className='gradient-text'>Custom</span> Vector Graphics
        </h1>
        <p className='text-3xl mb-3 font-medium text-center'>
          That help your brand get noticed
        </p>
        <p className='mv:w-full sm:w-500 text-center'>
          Are you looking to take your design beyond the free illustrations we
          offer? Do you want your users to have a memorable experience? Then
          take a journey with us into the Forbidden Forest and let&#39;s create
          illustrations for your project, together.
        </p>
        <button
          className='mt-20 text-center rounded px-8 py-4 text-black w-48 text-md tracking-wider font-poppins bg-white border border-black cursor-pointer hover:scale-102 transition-all ease-in duration-50 mv:mx-auto sm:mx-0'
          id='hire-btn'
          onClick={scrollToForm}  
        >
          Get started
        </button>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-80'>
        <h1 className='text-4xl text-center mb-4 w-100'>
          We create custom vector illustrations
        </h1>
        <p className='text-center mv:w-full sm:w-500'>
          If you want custom illustrations tailored to your brand, then
          we&#39;ve got you covered. We make custom illustrations that are tailored to
          your <span className='text-secondary font-semibold'>brand</span>{' '}
          <span className='text-theme font-semibold'>colors.</span> Setting your website apart from 
          the competition starts here.
        </p>
        <div className='flex items-center justify-around mt-16 mv:flex-col-reverse md:flex-row'>
          <Image
            className='h-auto mv:w-full sm:w-9/12'
            src={brand11}
            alt='vector branding concept illustration'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-80'>
        <h1 className='text-4xl text-center mb-4 w-100'>
          Upgrade your project&#39;s graphics
        </h1>
        <p className='text-center mv:w-full sm:w-500'>
          Our custom illustrations will leave a lasting impression on anyone who
          comes across them. Below are common questions in regards to the process of creating your illustrations.
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
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12 mt-80'>
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
      <div className='flex flex-col justify-center items-center px-8 mb-12 mt-80' ref={ref} id="reference">
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
