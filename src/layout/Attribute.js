import Image from 'next/image'
import image from '../../public/images/building-theme.webp'
import arrow from '../../public/images/arrowai.webp'


const Attribute = () => {
  return (
    <section className='mt-80 px-8'>
      <span>
        <h2 className='text-4xl w-96 text-black text-center mx-auto mb-6'>
          Image attributes
        </h2>
        <p className='text-center mx-auto text-black mv:w-full md:w-400'>
          We require you to add image attributions when using our illustrations.
          There are two options you can choose from when adding attributes.
        </p>
      </span>
      <div className='flex items-center mv:mt-8 md:mt-32 mv:flex-col md:flex-row'>
        <div className='flex-1 relative flex flex-col items-center justify-center mv:w-screen md:w-7/12 mv:mt-16 md:mt-0'>
          <Image
            src={image}
            alt='platform'
            className='h-auto w-4/6'
            blurDataURL='URL'
            placeholder='blur'
          />
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
          <div className='mv:mt-24 md:mt-0 mv:w-full md:w-96'>
            <p className='text-3.5xl mb-4 text-black'>Attribute Options</p>
            <ul className='list-disc'>
              <li className='mb-2 text-black'>
                You can add an attribute under each individual image as seen
                here.
              </li>
              <li className='mb-8 text-black'>
                Or you can add one attribute in your footer to account for all
                images on your site.
              </li>
              <p className='text-sm italic'>
                * The attribute must link back to this site
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Attribute
