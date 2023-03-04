import { getCollectionById } from '@/collectiondata'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Collection() {
  const router = useRouter()

  const collectionID = router.query.collectionID

  const collection = getCollectionById(collectionID)  

  const { title, col, description } = collection
  console.log(title, col)

  // if (!collection) {
  //   alert('Page does not exist')
  // }

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-16 mb-16'>
        <p>{title}</p>
        <h2>{col}</h2>
        <p className='w-400 text-center mb-8'>{description}</p>
        <Link href='/illustrations' className='relative rounded px-8 py-4 mt-4 border border-theme cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in duration-50'>
          Illustration sets
        </Link>
      </div>
      <div className='grid mv:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-24 gap-x-16 gap-y-52 place-items-center'>
        {collection.imageData.map((image, index) => {
          return (
            <Link
              href='#'
              key={index}
              className='relative cursor-pointer h-full flex items-center hover:border hover:border-[#DCDCDC] hover:shadow-lg ease-in duration-150'
            >
              <Image
                src={image.image}
                alt={`Vector ${image.alt} illustration`}
              />
              <p className='whitespace-nowrap text-center text-sm px-6 py-2 bg-white text-black border rounded-sm border-black absolute -bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                Preview image
              </p>
            </Link>
          )
        })}
      </div>
    </>
  )
}

// Add to avoid lost collection data when the user refreshes
// I have no reason why this works, I just found this solution on stack overflow
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}