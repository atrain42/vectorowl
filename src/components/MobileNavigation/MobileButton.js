import Image from 'next/image'
import menu from '../../../public/images/hamburger_menu.svg'
import close from '../../../public/images/close.svg'

export default function MobileButton({open, setOpen}) {
  const menuIcon = (
    <Image
      className='cursor-pointer h-12 w-12'
      onClick={() => setOpen(!open)} 
      src={menu} 
      alt='hamburger menu' 
    />
  )

  const closeIcon = (
    <Image
      className='cursor-pointer h-12 w-12'
      src={close}
      alt='close icon'
      onClick={() => setOpen(!open)}
    />
  )
  
  return (
    <div className='top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 z-40 mv:absolute md:hidden'>
      {open ? closeIcon : menuIcon}
    </div>
  )
}
