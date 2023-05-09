import { motion } from 'framer-motion'
// import { getImageByURL } from '@/imagedata/black-V1'
import { getCollectionById } from '@/collectiondata'

import { useRouter } from 'next/router'
import Image from 'next/image'
import eyes from '../../../../../public/images/eyes.webp'


export default function PreviewedImage() {
  const router = useRouter()

  const imageID = router.query.imageID
  const collectionID = router.query.collectionID
  const test = getCollectionById(collectionID)
  const getImageByURL = () => {
    return test.imageData.find((image) => image.url === imageID)
  }

  const findImage = getImageByURL()
  const { title, image, collection, alt } = findImage




  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className='flex bg-white items-center justify-evenly mv:flex-col-reverse sm:flex-row mt-24 mb-36'
    >
      <div>
        <div className='flex justify-center flex-col mv:mr-0 mv:w-full md:mr-4 md:w-100'>
          <Image className='w-24 mb-2' src={eyes} alt='eyes vector' />
          <p className='font-lato text-lg mb-2'>{collection}</p>
          <p className='text-5xl mb-12'>{title}</p>
          <a
            href={image.src}
            className='text-center rounded-sm px-8 py-4 text-black w-48 text-md tracking-wider font-poppins bg-white border border-black cursor-pointer btn-5'
            download
          >
            Download
          </a>
        </div>
      </div>
      <div className='mv:h-full mv:w-full sm:h-96 sm:w-96 flex items-center justify-center mv:px-12 sm:px-0'>
        <Image src={image} alt={alt} />
      </div>
    </motion.div>
  )
}

// Add to avoid lost collection data when the user refreshes
// I have no reason why this works, I just found this solution on stack overflow
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
