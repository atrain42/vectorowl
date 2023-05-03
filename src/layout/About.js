import Image from "next/image"

import Flex from "@/components/Flex/Flex"
import FlexReverse from "@/components/Flex/FlexReverse"

import flying from '../../public/images/flying.webp'
import spinning from '../../public/images/spinning.webp'
import hanging from '../../public/images/hanging.webp'
import owl from '../../public/images/owl-eyes.webp'


const data = [
  {
    img: flying,
    title: 'Free Illustrations',
    subtitle: 'Use our free images where you please',
    item1:
      'To download free images, preview the image and click the download button.',
    item2: 'When using our illustrations, you must include an image attribute.',
  },
  {
    img: spinning,
    title: 'Optimized images',
    subtitle:
      'Our images are optimized to look great on any platform or device',
    item1: 'All images are available in .webp file extension.',
    item2:
      'Our images are vector graphics, which ensures they retain their quality and visual appeal on any background color.',
  },
  {
    img: hanging,
    title: 'Custom Illustrations',
    subtitle: 'Make your website or brand memorable',
    item1:
      'We offer to create custom illustrations that are tailored to your brand colors.',
    item2:
      'For custom illustrations, there is no need to include an attribute on the images.',
  },
]


export default function About() {
  return (
    <div className='pt-80'>
      <span className="flex flex-col items-center">
        <Image className="w-20 mb-8" src={owl} alt="owl eyes vector concept"/>
        <h2 className='text-4xl w-96 text-center mx-auto mb-6'>
          A new way to do images
        </h2>
        <p className='text-center'>
          Finding vector illustrations for your website has never been this
          easy.
        </p>
      </span>

      <Flex {...data[0]} />
      <FlexReverse {...data[1]} />
      <Flex {...data[2]} link={true} />
    </div>
  )
}
