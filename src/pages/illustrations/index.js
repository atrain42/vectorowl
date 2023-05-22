import { motion } from 'framer-motion'
import Collections from '@/layout/Collections'
import { NextSeo } from 'next-seo'


export default function index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className='mb-40'
    >
      <NextSeo
        title='Free Vector Illustrations | Collections'
        description='Explore a variety of free vector illustrations to enhance your website. Our vector art is available for download in WebP format. Premium illustrations available.'
      />
      <Collections paddingTop='pt-16' />
    </motion.div>
  )
}
