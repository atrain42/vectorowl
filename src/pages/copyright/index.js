import React from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Term from '../terms/term'

export default function Copyright() {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className='flex flex-col items-center mb-40 px-8'
    >
      <NextSeo
        title='Free Vector Illustrations | Collections'
        description='Explore a variety of free vector illustrations to enhance your website. Our vector art is available for download in WebP format. Premium illustrations available.'
      />
      <h2 className='text-center my-16'>Copyright</h2>
      <Term title='Our Policy' text={text} />
    </motion.div>
  )
}
