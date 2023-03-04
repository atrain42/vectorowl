import Image from 'next/image'
// import { useSelector } from 'react-redux'
// import { cartActions } from '../slices/cartSlice'

import cart from '../../../public/images/cart.svg'

export default function Cart() {
  // const cartTotalQuantity = useSelector((state) => state.cartTotalQuantity)

  // const incrementHandler = () => {
  //   dispatch(cartActions.increment(1))
  // }
  // const [token, setToken] = useState(0)
  return (
    <div className='h-10 w-10'>
      <a className='relative' href='/cart'>
        <Image src={cart} alt='cart' />
        <div className='h-2 w-2 p-3 rounded-full bg-black text-white flex items-center justify-center absolute -top-2 -right-1'>
          {/* Need to install redux */}
          {/* <p className='text-xs'>{cartTotalQuantity}</p> */}
          <p className='text-white text-[13px]'>5</p>
        </div>
      </a>
    </div>
  )
}
