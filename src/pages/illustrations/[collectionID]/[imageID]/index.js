import { getImageByTitle } from '@/imagedata/1.0-black&white'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function PreviewedImage() {
  const router = useRouter()

  const imageID = router.query.imageID

  const findImage = getImageByTitle(imageID)

  const { title, image } = findImage

  return (
    <>
      <div>{title}</div>
      <Image src={image} alt="hi" />
    </>
  )
}
