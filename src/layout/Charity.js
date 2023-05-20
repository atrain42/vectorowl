import Image from 'next/image'
import image from '../../public/images/building-theme.webp'
import arrow from '../../public/images/arrowai.webp'


const Charity = () => {
  return (
    <section className='mt-80'>
      <span>
        <h2 className='text-4xl w-96 text-black text-center mx-auto mb-6'>
          Image attributes
        </h2>
        <p className='text-center w-3/6 mx-auto text-black'>
          We require you to add image attributions when using our illustrations.
        </p>
      </span>
      <div className='flex items-center mt-32 mv:flex-col-reverse md:flex-row'>
        <div className='flex-1 relative flex flex-col items-center justify-center mv:w-screen md:w-7/12 mv:mt-16 md:mt-0'>
          <Image className='h-auto w-4/6' src={image} alt='platform' />
          <span className='relative'>
            <p className='mt-4 text-xs'>
              Image from{' '}
              <a className='underline' href='#'>
                vectorowl.com
              </a>
              <Image
                className='absolute top-8 right-0 h-24 w-auto'
                src={arrow}
                alt='arrow'
              />
            </p>
          </span>
        </div>
        <div className='px-12 flex-1 flex flex-col items-center justify-center w-screen'>
          <div className='mv:mt-16 md:mt-0 mv:w-full md:w-96'>
            <p className='text-4xl mb-4 text-black'>Adding attributes</p>
            <p className='font-semibold mb-4 text-black'>
              There are two options to include attributes
            </p>
            <div className=''>
              <p className='mb-2 text-black'>
                1&#41; You can add the attribute under each individual image.
              </p>
              <p className='mb-8 text-black'>
                2&#41; You can add one attribute in your footer to account for
                all images on your site.
              </p>
              <p className='text-sm italic'>* The attribute must link back to this site</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Charity
