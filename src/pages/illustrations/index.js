import { motion } from 'framer-motion'
import Collections from '@/layout/Collections'
import SectionHeading from '@/components/SectionHeading'


export default function index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className='pt-16'
    >
      <SectionHeading
        title='Illustration sets'
        description='Finding unique images for your website starts here. Enter our different collections of graphic illustrations and find the image that sets your website apart.'
        padding='pt-0'
      />
      <Collections />
    </motion.div>
  )
}
