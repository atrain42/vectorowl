import { useRef } from "react"
import { motion, useInView } from 'framer-motion'
import { getCollectionById } from '@/collectiondata'
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function PreviewedImage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
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
      className='flex bg-white items-center justify-evenly mv:flex-col-reverse sm:flex-row mt-24 mb-36 px-4'
      ref={ref}
    >
      <div>
        <div className='flex flex-col mv:mr-0 mv:w-full md:mr-4 md:w-100 items-start'>
          <p className='font-lato text-lg mb-2 w-full mv:text-center sm:text-left'>
            {collection}
          </p>
          <p className='text-5xl mb-12 w-full mv:text-center sm:text-left'>
            {title}
          </p>
          <a
            href={image.src}
            className='text-center rounded px-8 py-4 text-black w-48 text-md tracking-wider font-poppins bg-white border border-black cursor-pointer shadow-button hover:scale-102 transition-all ease-in duration-50 mv:mx-auto sm:mx-0'
            download
            style={{
              transform: isInView ? 'none' : 'translateY(40px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Download
          </a>
        </div>
      </div>
      <div className='mv:h-full mv:w-full sm:h-96 sm:w-96 flex items-center justify-center mv:px-12 sm:px-0 mv:mb-12 sm:mb-0'>
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
