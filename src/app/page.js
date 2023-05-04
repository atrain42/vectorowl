import SectionHeading from '@/components/SectionHeading'

import Navbar from '@/components/Navbar/Navbar'
import Header from '@/layout/Header'
import About from '@/layout/About'
import Collections from '@/layout/Collections'
import Charity from '@/layout/Charity'
import Faq from '@/layout/FAQ/Faq'
import Contact from '@/layout/Contact'
import Footer from '@/components/Footer'
import CoffeeLink from '@/components/CoffeeLink'

export default function Home() {
  return (
    <main>
      <CoffeeLink />
      <Navbar />
      <Header />
      <About />
      <Collections paddingTop='pt-80' />
      <Charity />
      <Faq />
      <Contact padding='pt-80' />
      <Footer padding='pt-80' />
    </main>
  )
}
