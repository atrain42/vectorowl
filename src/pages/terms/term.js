import React from 'react'

export default function Term ({ title, text  }) {
  return (
    <div className='w-400 mb-8'>
      <p className='font-semibold text-xl mb-1'>{title}</p>
      <p>{text}</p>
    </div>
  )
}
