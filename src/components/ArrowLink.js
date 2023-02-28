'use client'
import React, { useState } from "react";
// import chevron from '../../public/images/chevron.svg'


export default function ArrowLink({ title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className='flex items-center cursor-pointer w-fit p-1'
    >
      <p
        className={`transition ease-in duration-150 mr-8 text-xl ${
          isHovered ? 'text-secondary' : 'text-[#222222]'
        }`}
      >
        {title}
      </p>
      <span
        className={`relative flex items-center transition-all ease-in duration-150 ${
          isHovered ? 'ml-4' : 'ml-0'
        }`}
      >
        <div
          className={`h-0.5 ease-in duration-150 absolute right-2 ${
            isHovered ? 'w-12 bg-secondary' : 'w-4 bg-[#222222]'
          }`}
        ></div>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
        >
          <title>chevron-right</title>
          <path
            className='ease-in duration-150'
            fill={isHovered ? '#f45d48' : '#222222'}
            d='M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z'
          ></path>
        </svg>
      </span>
    </div>
  )
}
