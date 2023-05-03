import { blackV1 } from '@/imagedata/black-V1'
import { colorV1 } from '@/imagedata/color-V1'

export const collections = [
  {
    title: 'Black and White',
    description:
      "Here, you can find our 1st collection of black and white vector illustrations. Let's take a journey to the dark side, together. ",
    col: 'Collection 1.0',
    id: 'black&white1.0',
    imageData: blackV1,
  },
  {
    title: 'Color',
    description:
      'Here, you can find our 1st collection of colorful vector illustrations. May the illustrations in this collection bring light to your project.',
    col: 'Collection 1.0',
    id: 'color1.0',
    imageData: colorV1,
  },
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
]

export function getCollectionById (id) {
  return collections.find((collection) => collection.id === id);
}
