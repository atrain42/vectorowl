import SectionHeading from '@/components/SectionHeading'

import Navbar from '@/components/Navbar/Navbar'
import Header from '@/layout/Header'
import About from '@/layout/About'
import Collections from '@/layout/Collections'
import Charity from '@/layout/Charity'
import Faq from '@/layout/FAQ/Faq'
import Contact from '@/layout/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Collections />
      <Charity />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
