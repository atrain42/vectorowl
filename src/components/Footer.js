const Footer = () => {
  const getYear = () => {
    const date = new Date();
    let year = date.getFullYear();

    return year;
  };

  return (
    <footer className='mv:px-8 md:px-20 mb-20 mt-48'>
      <div className='grid place-items-start mb-28 w-full mv:grid-cols-1 sm:grid-cols-3'>
        <div className='mv:mb-12 sm:mb-0'>
          <p className='mb-4 font-semibold'>HollowBox</p>
          <p className='text-sm'>
            At HollowBox, we offer scalable vector illustrations for various use
            cases such as branding, marketing, web & app design, and more. Our
            illustrations are unique and versatile to fit your project needs.
          </p>
        </div>
        <div className='mv:justify-self-start sm:justify-self-end flex flex-col mv:mb-12 sm:mb-0'>
          <p className='mb-5 font-semibold'>Company</p>
          <ul className='cursor-pointer'>
            <li className='mb-3'>About</li>
            <li className='mb-3'>Terms of Service</li>
            <li className='mb-3'>Privacy Policy</li>
          </ul>
        </div>
        <div className='mv:justify-self-start sm:justify-self-end flex flex-col mv:mb-12 sm:mb-0'>
          <p className='mb-5 font-semibold'>Navigation</p>
          <ul className='cursor-pointer'>
            <li className='mb-3'>Home</li>
            <li>Illustrations</li>
          </ul>
        </div>
      </div>
      <div className='h-px w-full bg-gray-800'></div>
      <h3 className='mt-2'>
        &#xA9; HollowBox Design, {getYear()}. All rights reserved.
      </h3>
    </footer>
  )
};

export default Footer;
