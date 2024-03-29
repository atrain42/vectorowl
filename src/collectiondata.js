import { blackV1 } from '@/imagedata/black-V1'
import { colorV1 } from '@/imagedata/color-V1'

export const collections = [
  {
    title: 'Midnight',
    description:
      "Here, you can find our collection of free black and white vector illustrations. Let's take a journey to the dark side, together.",
    col: 'Black & White Illustrations',
    id: 'black&white',
    imageData: blackV1,
    buttonRoute: 'color',
    buttonTitle: 'Color set',
    seoTitle: 'Vector Owl - Black and White Illustrations',
  },
  {
    title: 'Daylight',
    description:
      'Here, you can find our collection of free colorful vector illustrations. May the illustrations in this collection bring light to your project.',
    col: 'Color Illustrations',
    id: 'color',
    imageData: colorV1,
    buttonRoute: 'black&white',
    buttonTitle: 'Black and white set',
    seoTitle: 'Vector Owl - Color Illustrations',
  },
]

export function getCollectionById (id) {
  return collections.find((collection) => collection.id === id);
}
