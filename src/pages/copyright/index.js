import React from 'react'
import Term from '../terms/term'

export default function copyright() {
  const text = 
      `  All images on this website are the property of
        vectorowl.com and are protected under copyright law. Users are
        prohibited from reselling or redistributing any images obtained from
        this website as their own, whether in digital or physical form. Users
        are also prohibited from using any images obtained from this website for
        commercial purposes without obtaining prior written consent from
        vectorowl.com. Any unauthorized use or reproduction of the images on
        this website may result in legal action.
      `
  return (
    <div className='flex flex-col items-center mb-40'>
      <h2 className='text-center my-16'>Copyright</h2>
      <Term title="Our Policy" text={text}/>
    </div>
  )
}
