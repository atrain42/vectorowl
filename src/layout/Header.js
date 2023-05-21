import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/images/branding-landing.webp'


const Header = () => {
  return (
    <header className='flex items-center mv:px-8 mv:flex-col-reverse mv:justify-center mv:pt-8 md:flex-row md:justify-evenly md:pt-20'>
      <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
        <h1 className='text-5xl'>
          <strong>Vector illustrations</strong> for your website
        </h1>
        <p className='mt-5 w-full'>
          At Vector Owl, we create unique vector art that will separate your
          website from the competition. Choose from our collection of free
          images, or hire us and we&#39;ll create custom
          images to better fit your design.
        </p>
        {/* <p>
          Today, so many websites are using the same style of vector images. We
          are here to disrupt that trend.
        </p> */}
        <div className='grid grid-cols-2 mt-8 gap-x-9 gap-y-9 font-button place-items-center text-md tracking-wider'>
          <Link
            className='shadow-button w-full rounded font-poppins font-normal text-center py-4 bg-theme text-white hover:scale-102 transition-all ease-in duration-50'
            href='/illustrations'
          >
            Free illustrations
          </Link>
          <Link
            className='shadow-button w-full rounded text-center font-poppins font-normal py-4 border bg-white border-theme hover:scale-102 transition-all ease-in duration-50'
            href='/hire-us'
          >
            Hire us
          </Link>
        </div>
      </div>
      <div className='mv:ml-0 mv:h-full mv:w-full md:ml-4 md:h-200 md:w-auto mv:mb-12 md:mb-0'>
        <Image
          className='mv:h-5/6 mv:w-5/6 md:h-full md:w-auto mv:mx-auto'
          src={image}
          alt='platform'
          priority
        />
      </div>
    </header>
  )
};

export default Header;
