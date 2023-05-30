import CollectionCard from '../components/CollectionCard'
import { collections } from '../collectiondata'

export default function Collections({ paddingTop }) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center ${paddingTop} mv:px-8 md:px-0 mb-16`}
      >
        <h2 className='text-center text-4xl'>Free illustrations</h2>
        <p className='mt-5 text-center mv:w-full md:w-400'>
          Finding unique images for your website starts here. Enter our
          different collections of graphic illustrations and find the image that
          sets your website apart.
        </p>
      </div>
      <div className='mv:px-8 md:px-12 lg:px-20 flex gap-8 items-center justify-center mv:flex-col md:flex-row'>
        {collections.map((collection, index) => {
          return (
            <CollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              col={collection.col}
              id={collection.id}
              imageData={collection.imageData}
              line={collection.line}
              icon={collection.icon}
              hover={collection.hover}
            />
          )
        })}
      </div>
    </>
  )
}