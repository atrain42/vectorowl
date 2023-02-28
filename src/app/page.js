import SectionHeading from '@/components/SectionHeading'

import Navbar from '@/components/Navbar/Navbar'
import Header from '@/layout/Header'
import About from '@/layout/About'
import Collections from '@/layout/Collections'
import Charity from '@/layout/Charity'
import Faq from '@/layout/FAQ/Faq'
import Contact from '@/layout/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <SectionHeading
        title='Illustration sets'
        description='Finding unique images for your website starts here. Enter our different collections of graphic illustrations and find the image that sets your website apart.'
        padding='pt-80'
      />
      <Collections />
      <Charity />
      <Faq />
      <Contact />
    </main>
  )
}
