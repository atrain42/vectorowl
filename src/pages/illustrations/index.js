import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Collections from '@/layout/Collections'


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
        title='Vector Owl - Illustration Sets'
        description='Explore a variety of free vector illustrations to enhance your website. Our vector art is available for download in WebP format.'
      />
      <Collections paddingTop='pt-16' />
    </motion.div>
  )
}
