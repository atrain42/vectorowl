import CollectionCard from '../components/CollectionCard'
import { collections } from '../collectiondata'

export default function Collections() {
  return (
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
  )
}