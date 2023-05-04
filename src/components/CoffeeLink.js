import Link from "next/link"
import Image from "next/image"
import coffee from '../../public/images/bmc-logo.svg'

export default function CoffeeLink() {
  return (
    <div className='h-12 w-12 bg-offwhite rounded-full fixed bottom-4 right-4 border border-black shadow-button flex items-center justify-center'>
      <Link href='https://www.buymeacoffee.com/maxheimer4x'>
        <Image className="h-7 w-7" src={coffee} alt='coffee icon' />
      </Link>
    </div>
  )
}
