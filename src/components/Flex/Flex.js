import Image from "next/image"
import Link from "next/link"


export default function Flex({img, title, subtitle, item1, item2, route, linkText, direction }) {
  return (
    <div className={`flex mv:flex-col sm:${direction} mv:gap-x-0 sm:gap-x-56 justify-center items-center mt-24 mv:px-8 sm:px-0`}>
      <Image
        className='h-80 w-auto mv:mb-16 sm:mb-0'
        src={img}
        alt='vector kite flying concept illustration'
      />
      <div className='mv:w-full sm:w-96 flex flex-col'>
        <p className='text-3.5xl mb-4'>{title}</p>
        <p className='font-semibold mb-4'>{subtitle}</p>
        <ul className={`list-disc pl-8 ${Link ? 'mb-8' : 'mb-0'}`}>
          <li className='mb-2'>{item1}</li>
          <li>{item2}</li>
        </ul>
        <Link
          className='flex-1 tracking-wider shadow-button bg-theme text-white text-center py-3 rounded-md mv:hover-none md:hover:-translate-y-1 ease-in duration-150'
          href={route}
        >
          {linkText}
        </Link>
      </div>
    </div>
  )
}
