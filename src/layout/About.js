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
    title: 'Pay as needed',
    subtitle: 'No monthly subscription or hidden fees',
    item1: 'No need to sign up or pay subscription fees.',
    item2:
      'Add illustrations to your cart, and purchase them on an as-needed basis.',
  },
  {
    img: spinning,
    title: 'Free illustrations',
    subtitle: 'Use our free images where you please',
    item1:
      'To download free images, preview the image and click the download button.',
    item2:
      'To use free images, we require you to use an attribution that links back to our site.',
  },
  {
    img: hanging,
    title: 'Easy checkout',
    subtitle: 'Our checkout process is straightforward',
    item1:
      'After your payment is verified, you will then be able to download a zip file containing all your purchased images.',
    item2:
      'For free images, simply click the download button and immediately gain access to the image.',
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
      <Flex {...data[2]} />
    </div>
  )
}
