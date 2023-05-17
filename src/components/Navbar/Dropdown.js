'use client'
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { motion } from 'framer-motion'

import chevron from '../../../public/images/chevron-small-down.svg'

const Dropdown = () => {
  const [text, setText] = useState("");

  const closeDropdown = () => {
    setText("");
  };

  const showLinks = () => {
    if (!text) {
      setText(() => {
        return (
          <motion.div
            className='font-lora text-base rounded-md bg-offwhite flex flex-col justify-start p-6 mt-4 absolute border border-textblack shadow'
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.05 }}
          >
            <Link href='/copyright' onClick={closeDropdown}>
              About
            </Link>
            
            <Link className="my-4" href='/terms' onClick={closeDropdown}>
              Terms
            </Link>
            
            <Link href='/copyright' onClick={closeDropdown}>
              Copyright
            </Link>
          </motion.div>
        )
      });
    } else {
      setText("");
    }
  };

  return (
    <div className='relative mr-6'>
      <span className='flex items-center cursor-pointer p-2 nav-link' onClick={showLinks}>
        <button>Company</button>
        <Image className='h-6 w-6 ml-1' src={chevron} alt='chevron-right' />
      </span>

      <div>{text}</div>
    </div>
  )
};

export default Dropdown;
