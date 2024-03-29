import Flex from "@/components/Flex/Flex"
import flying from '../../public/images/flying.webp'
import spinning from '../../public/images/spinning.webp'
import hanging from '../../public/images/hanging.webp'



const data = [
  {
    img: flying,
    title: 'Free Illustrations',
    subtitle: 'Use our free images where you please',
    item1:
      'To download free images, preview the image and click the download button.',
    item2: 'When using our illustrations, you must include an image attribute.',
    direction: 'flex-row',
    route: '/illustrations',
    linkText: 'Free illustrations'
  },
  {
    img: hanging,
    title: 'Custom Illustrations',
    subtitle: 'Make your website or brand memorable',
    item1:
      'We offer to create custom illustrations that are tailored to your brand colors.',
    item2:
      'For custom illustrations, there is no need to include an attribute on the images.',
    direction: 'flex-row-reverse',
    route: '/hire-us',
    linkText: 'Hire us'
  },
  {
    img: spinning,
    title: 'Optimized images',
    subtitle:
      'Our images are optimized to look great on any platform or device',
    item1: 'All images are available in .webp file extension.',
    item2:
      'Our images are vector graphics, which ensures they retain their quality and visual appeal on any background color.',
    direction: 'flex-row',
    route: '/about',
    linkText: 'More about us'
  },
]


export default function About() {
  return (
    <div className='pt-80 px-8'>
      <span className="flex flex-col items-center">
        <h2 className='text-4xl w-96 text-center mx-auto mb-6'>
          A new way to do images
        </h2>
        <p className='text-center w-full'>
          Finding vector illustrations for your website has never been this
          easy.
        </p>
      </span>
      {data.map((flex, index) => {
        return (
          <Flex 
            key={index}
            img={flex.img}
            title={flex.title}
            subtitle={flex.subtitle}
            item1={flex.item1}
            item2={flex.item2}
            link={flex.link}
            route={flex.route}
            linkText={flex.linkText}
            direction={flex.direction}
          />
        )
      })}
    </div>
  )
}
