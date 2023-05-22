import React from 'react'
import { termData } from './term-data'
import Term from './term'

export default function Terms() {
  return (
    <div className='flex flex-col items-center justify-center mb-40'>
      <h2 className='text-center my-16'>Terms of Service</h2>
      {termData.map((term, index) => {
        return (
          <Term 
            key={index}
            title={term.title}
            text={term.text}
          />
        )
      })}
    </div>
  )
}
