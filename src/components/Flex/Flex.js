import Image from "next/image"
import Link from "next/link"
import ArrowLink from "../ArrowLink"

export default function Flex({img, title, subtitle, item1, item2, link }) {
  return (
    <div
      className='flex mv:flex-col sm:flex-row mv:gap-x-0 sm:gap-x-56 justify-center items-center mt-24 mv:px-8 sm:px-0'
    >
      <Image
        className='h-80 w-auto mv:mb-16 sm:mb-0'
        src={img}
        alt='vector kite flying concept illustration'
      />
      <div className='mv:w-full sm:w-96'>
        <p className='text-4xl mb-4'>{title}</p>
        <p className='font-semibold mb-4'>{subtitle}</p>
        <ul className={`list-disc pl-8 ${Link ? 'mb-8' : 'mb-0'}`}>
          <li className='mb-2'>{item1}</li>
          <li>{item2}</li>
        </ul>
        {link && <ArrowLink title="Brand Builder" />}
      </div>
    </div>
  )
}
