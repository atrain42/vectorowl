import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/images/building-theme.webp'


const Charity = () => {
  return (
    <section className='pt-80'>
      <span>
        <h2 className='text-4xl w-96 text-center mx-auto mb-6'>
          Why choose Hollowbox?
        </h2>
        <p className='text-center w-3/6 mx-auto'>
          In addition to supplying you with high-quality vector illustrations,
          we also value giving back to the community.
        </p>
      </span>
      <div className='flex items-center mt-16 mv:flex-col-reverse md:flex-row'>
        <div className='px-12 flex-1 flex flex-col items-center justify-center w-screen'>
          <div className='mv:mt-16 md:mt-0 mv:w-full md:w-96'>
            <p className='text-4xl mb-4'>Charity support</p>
            <p className='font-semibold mb-4'>
              At HollowBox, we value giving back
            </p>
            <ul className='list-disc pl-8 mb-12'>
              <li className='mb-2'>
                We donate a percentage of our profits to charity each month.
              </li>
              <li className='mb-2'>
                Currently, we are supporting Sages Beating Heart Foundation.
              </li>
              <li>
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
        <div className='flex-1 relative flex items-centery justify-center mv:w-screen md:w-7/12 py-24'>
          <Image className='h-auto w-4/6' src={image} alt='platform' />
        </div>
      </div>
    </section>
  )
}

export default Charity
