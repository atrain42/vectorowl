import Image from 'next/image'
import CollectionCard from '../components/CollectionCard'
import { collections } from '../collectiondata'
import owl from '../../public/images/owl-2.webp'

export default function Collections({ paddingTop }) {
  return (
    <>
      <div className={`flex flex-col justify-center items-center ${paddingTop} mv:px-8 md:px-0 mb-12`}>
        <Image className="w-12 mb-8" src={owl} alt="Vector owl concept"/>
        <h2 className='text-center'>Illustration sets</h2>
        <p className='mt-5 text-center mv:w-full md:w-400'>
          Finding unique images for your website starts here. Enter our
          different collections of graphic illustrations and find the image that
          sets your website apart.
        </p>
      </div>
      <div className='mv:px-8 md:px-12 lg:px-20 grid mv:grid-cols-1 md:grid-cols-2 gap-12 place-items-center'>
        {collections.map((collection, index) => {
          return (
            <CollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              col={collection.col}
              id={collection.id}
              imageData={collection.imageData}
            />
          )
        })}
      </div>
    </>
  )
}