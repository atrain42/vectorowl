import { BlackV1 } from '@/imagedata/1.0-black&white'
import { ColorV1 } from '@/imagedata/1.0-color'

export const collections = [
  {
    title: 'Black and White',
    description:
      "Here, you can find our 1st collection of black and white vector illustrations. Let's take a journey to the dark side, together. ",
    col: 'Collection 2.0',
    id: 'black&white2.0',
  },
  {
    title: 'Color',
    description:
      'Here, you can find our 1st collection of colorful vector illustrations. May the illustrations in this collection bring light to your project.',
    col: 'Collection 2.0',
    id: 'color2.0',
  },
  {
    title: 'Black and White',
    description:
      "Here, you can find our 1st collection of black and white vector illustrations. Let's take a journey to the dark side, together. ",
    col: 'Collection 1.0',
    id: 'black&white1.0',
    imageData: BlackV1
  },
  {
    title: 'Color',
    description:
      'Here, you can find our 2nd collection of colorful vector illustrations. May the illustrations in this collection bring light to your project.',
    col: 'Collection 1.0',
    id: 'color1.0',
    imageData: ColorV1
  },
  {
    title: 'Free',
    description:
      'Here, you can find our collection of free vector illustrations. You can easily download illustrations at no cost to you.',
    col: 'Free Illustrations',
    id: 'free-illustrations',
  },
]

export function getCollectionById (id) {
  return collections.find((collection) => collection.id === id);
}

export function tester (id) {
  console.log(id)
}