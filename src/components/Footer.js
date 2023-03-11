const Footer = () => {
  const getYear = () => {
    const date = new Date();
    let year = date.getFullYear();

    return year;
  };

  return (
    <footer className='mv:px-8 md:px-20 mb-12 mt-72'>
      <div className='grid place-items-start mb-24 w-full mv:grid-cols-1 sm:grid-cols-3'>
        <div className='mv:mb-12 sm:mb-0'>
          <p className='mb-4 font-semibold'>Vector Owl</p>
          <p className='text-sm'>
            At Vector Owl, we offer scalable vector illustrations for various use
            cases such as branding, marketing, web & app design, and more. Our
            illustrations are unique and versatile to fit your project needs.
          </p>
        </div>
        <div className='mv:justify-self-start sm:justify-self-end flex flex-col mv:mb-12 sm:mb-0'>
          <p className='mb-5 font-semibold'>Company</p>
          <ul className='cursor-pointer'>
            <li className='mb-2 text-sm'>About</li>
            <li className='mb-2 text-sm'>Terms of Service</li>
            <li className='mb-2 text-sm'>Privacy Policy</li>
          </ul>
        </div>
        <div className='mv:justify-self-start sm:justify-self-end flex flex-col mv:mb-12 sm:mb-0'>
          <p className='mb-5 font-semibold'>Navigation</p>
          <ul className='cursor-pointer'>
            <li className='mb-2 text-sm'>Home</li>
            <li className='mb-2 text-sm'>Illustrations</li>
            <li className='mb-2 text-sm'>Contact</li>
          </ul>
        </div>
      </div>
      <div className='h-px w-full bg-gray-800'></div>
      <p className='mt-4 text-right text-sm'>
        &#xA9; Vector Owl, {getYear()}. All Rights Reserved.
      </p>
    </footer>
  )
};

export default Footer;
