import React from 'react'
import { termData } from './term-data'
import { NextSeo } from 'next-seo'
import Term from './term'

export default function Terms() {
  return (
    <div className='flex flex-col items-center justify-center mb-40'>
      <NextSeo
        title='Free Vector Illustrations | Collections'
        description='Explore a variety of free vector illustrations to enhance your website. Our vector art is available for download in WebP format. Premium illustrations available.'
      />
      <h2 className='text-center my-16'>Terms of Service</h2>
      {termData.map((term, index) => {
        return <Term key={index} title={term.title} text={term.text} />
      })}
    </div>
  )
}
