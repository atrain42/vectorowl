import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/images/theme-header-2.webp'


const Header = () => {
  return (
    <header className='flex items-center mv:px-8 mv:flex-col-reverse mv:justify-center mv:pt-8 md:flex-row md:justify-evenly md:pt-20'>
      <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
        <h1 className='mv:text-5xl md:text-5xl'>
          <strong>Vector illustrations</strong> for your website
        </h1>
        <p className='mt-5 text-lg w-full'>
          At Vector Owl, we create unique vector art that will separate your
          website from the competition. Today, so many websites are using the
          same style of vector images. We are here to disrupt that trend.
        </p>
        <div className='grid grid-cols-2 mt-8 gap-x-9 gap-y-9 font-button place-items-center text-md tracking-wider'>
          <Link
            className='w-full rounded font-poppins font-normal text-center py-4 bg-theme text-white border border-black hover:scale-102 active:scale-95 transition-all ease-in duration-50'
            href='/illustrations'
          >
            Illustrations
          </Link>
          <Link
            className='w-full rounded text-center font-poppins font-normal py-4 border bg-offwhite border-black hover:scale-102 active:scale-95 transition-all ease-in duration-50'
            href='/pricing'
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className='mv:ml-0 mv:h-full mv:w-full md:ml-4 md:h-200 md:w-auto mv:mb-12 md:mb-0'>
        <Image
          className='mv:h-5/6 mv:w-5/6 md:h-full md:w-full mv:mx-auto'
          src={image}
          alt='platform'
        />
      </div>
    </header>
  )
};

export default Header;
