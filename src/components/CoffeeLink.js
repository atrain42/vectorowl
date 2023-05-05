"use client"
import { useState } from 'react' 
import Link from "next/link"
import Image from "next/image"
import coffee from '../../public/images/bmc-logo.svg'

export default function CoffeeLink() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href='https://www.buymeacoffee.com/maxheimer4x'
        className='h-12 w-12 bg-offwhite rounded-full fixed bottom-4 right-4 border border-black shadow-button flex items-center justify-center'
      >
        <Image className='h-7 w-7' src={coffee} alt='coffee icon' />
      </Link>
      <div
        className={`bg-offwhite border border-black fixed bottom-19 right-8 rounded-md flex items-center justify-center px-8 py-4 ${
          isHovered ? 'translate-x-0' : 'translate-x-96'
        } linear duration-300`}
      >
        <p className='text-sm'>Buy me a coffee :&#41;</p>
      </div>
    </>
  )
}
