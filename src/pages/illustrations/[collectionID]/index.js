import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { getCollectionById } from '@/collectiondata'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import svg from '../../../../public/images/eye.svg'
import lazyImg from '../../../../public/images/lazy-placeholder.jpeg'

export default function Collection() {
  const [isHovered, setIsHovered] = useState(-1) 
  const router = useRouter()
  const collectionID = router.query.collectionID
  const collection = getCollectionById(collectionID)
  const { title, col, description, id, buttonRoute, buttonTitle } = collection

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className='mb-40 px-8'
    >
      <div className='flex flex-col justify-center items-center mt-16 mb-24'>
        <p>{title}</p>
        <h2>{col}</h2>
        <p className='mv:w-full sm:w-400 text-center mb-8'>{description}</p>
        <Link
          href={`/illustrations/${buttonRoute}`}
          className='relative rounded px-8 py-4 mt-4 border border-theme cursor-pointer hover:scale-105 transition-all ease-in duration-50'
        >
          {buttonTitle}
        </Link>
      </div>
      <div className='grid mv:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mv:px-0 md:px-24 mv:gap-x-0 md:gap-x-12 gap-y-36 place-items-center'>
        {collection.imageData.map((image, index) => {
          return (
            <Link
              href={`/illustrations/${id}/${image.url}`}
              key={index}
              className='relative cursor-pointer h-full flex items-center hover:shadow-lg'
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}
            >
              {isHovered === index && (
                <div className='h-full w-full z-90 absolute top-0 left-0 hover-menu'>
                  <Image
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12'
                    src={svg}
                    alt='View icon'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    placeholder='blur'
                  />
                </div>
              )}
              <Image
                src={image.image}
                alt={`Vector ${image.alt} illustration`}
                className='h-52 w-auto'
              />
            </Link>
          )
        })}
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