import Flex from "@/components/Flex/Flex"
import FlexReverse from "@/components/Flex/FlexReverse"

import flying from '../../public/images/flying.webp'
import spinning from '../../public/images/spinning.webp'
import hanging from '../../public/images/hanging.webp'


const data = [
  {
    img: flying,
    title: 'Pay as needed',
    subtitle: 'No monthly subscription or hidden fees',
    item1: 'No need to sign up or pay subscription fees.',
    item2:
      'Simply add images to your cart, and purchase images on an as-needed basis.',
  },
  {
    img: spinning,
    title: 'Optimized images',
    subtitle: 'Our images are made for the web',
    item1:
      'All vector illustrations can easily be scaled up, or down, depending on your project needs.',
    item2:
      'We test our images against multiple background colors to ensure a clean look in all use cases.',
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
      <span>
        <h2 className='text-4xl w-96 text-center mx-auto mb-6'>
          A new way to do images
        </h2>
        <p className='text-center font-semibold mb-6'>
          Simplicity is key at HollowBox
        </p>
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
