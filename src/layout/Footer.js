import Link from "next/link";
import Image from "next/image";
import twitter from '../../public/images/twitter.svg'
import instagram from '../../public/images/instagram.svg'

const Footer = ({ padding }) => {
  const getYear = () => {
    const date = new Date();
    let year = date.getFullYear();

    return year;
  };

  return (
    <footer className='mv:px-8 md:px-20 py-12 bg-offwhite'>
      <div className='grid place-items-start mb-24 w-full mv:grid-cols-1 sm:grid-cols-3'>
        <div className='mv:mb-12 sm:mb-0'>
          <p className='mb-4 font-semibold'>Vector Owl</p>
          <p className='text-sm'>
            At Vector Owl, we offer scalable vector illustrations for various
            use cases such as branding, marketing, web & app design, and more.
            Our illustrations are unique and versatile to fit your project
            needs.
          </p>
        </div>
        <div className='mv:justify-self-start sm:justify-self-end flex flex-col mv:mb-12 sm:mb-0'>
          <p className='mb-5 font-semibold'>Navigation</p>
          <div className='flex flex-col cursor-pointer'>
            <Link href='/' className='mb-2 text-sm hover:underline'>
              Home
            </Link>
            <Link href='/hire-us' className='mb-2 text-sm hover:underline'>
              Hire us
            </Link>
            <Link
              href='/illustrations'
              className='mb-2 text-sm hover:underline'
            >
              Illustrations
            </Link>
          </div>
        </div>
        <div className='mv:justify-self-start sm:justify-self-end flex flex-col mv:mb-12 sm:mb-0'>
          <p className='mb-5 font-semibold'>Company</p>
          <div className='flex flex-col cursor-pointer'>
            <Link href='/terms' className='mb-2 text-sm hover:underline'>
              Terms
            </Link>
            <Link href='/about' className='mb-2 text-sm hover:underline'>
              About
            </Link>
            <Link href='/copyright' className='mb-2 text-sm hover:underline'>
              Copyright
            </Link>
          </div>
        </div>
      </div>
      <div className='h-px w-full bg-gray-800'></div>
      <div className='flex items-center mt-4'>
        <p className=' text-left text-sm mr-12'>
          &#xA9; Vector Owl, {getYear()}. All Rights Reserved.
        </p>
        <div className='flex space-x-3.5'>
          <Link
            href='https://twitter.com/_PixelPrism'
            className='nav-link p-2 rounded-full transition-all ease-in duration-150'
          >
            <Image src={twitter} alt='twitter icon' className='h-4 w-4' />
          </Link>
          <Link
            href='https://www.instagram.com/_vectorowl/'
            className='nav-link p-2 rounded-full transition-all ease-in duration-150'
          >
            <Image src={instagram} alt='instagram icon' className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
