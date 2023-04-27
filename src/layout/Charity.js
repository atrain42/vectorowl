import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/images/building-theme.webp'


const Charity = () => {
  return (
    <section className='mt-80 py-28'>
      <span>
        <h2 className='text-4xl w-96 text-black text-center mx-auto mb-6'>
          Image attributes
        </h2>
        <p className='text-center w-3/6 mx-auto text-black'>
          We require you to add image attributions when using our illustrations.
        </p>
      </span>
      <div className='flex items-center mt-32 mv:flex-col-reverse md:flex-row'>
        <div className='flex-1 relative flex flex-col items-center justify-center mv:w-screen md:w-7/12'>
          <Image className='h-auto w-4/6' src={image} alt='platform' />
          <p className='mt-4 text-xs'>Image from <a className='underline' href="#">vectorowl.com</a></p>
        </div>
        <div className='px-12 flex-1 flex flex-col items-center justify-center w-screen'>
          <div className='mv:mt-16 md:mt-0 mv:w-full md:w-96'>
            <p className='text-4xl mb-4 text-black'>Charity support</p>
            <p className='font-semibold mb-4 text-black'>
              At VectorOwl, we value giving back
            </p>
            <ul className='list-disc pl-8'>
              <li className='mb-2 text-black'>
                We donate a percentage of our profits to charity each month.
              </li>
              <li className='mb-2 text-black'>
                Currently, we are supporting Sages Beating Heart Foundation.
              </li>
              <li className='text-black'>
                Learn more about{' '}
                <Link
                  className='underline'
                  href='https://www.sagesbeatingheart.org/'
                >
                  Sages Beating Heart Foundation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Charity
