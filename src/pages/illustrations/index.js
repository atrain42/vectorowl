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
    >
      <Collections paddingTop='p-16'/>
    </motion.div>
  )
}
