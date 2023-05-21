import SectionHeading from '@/components/SectionHeading'

import Navbar from '@/components/Navbar/Navbar'
import Header from '@/layout/Header'
import About from '@/layout/About'
import Collections from '@/layout/Collections'
import Attribute from '@/layout/Attribute'
import Faq from '@/layout/FAQ/Faq'
import Contact from '@/layout/Contact'
import Footer from '@/layout/Footer'
import CoffeeLink from '@/components/CoffeeLink'

export default function Home() {
  return (
    <main>
      <CoffeeLink />
      <Navbar />
      <Header />
      <About />
      <Collections paddingTop='pt-80' />
      <Attribute />
      <Faq />
      <Contact padding='pt-80' />
      <Footer />
    </main>
  )
}
