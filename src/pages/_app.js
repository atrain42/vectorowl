import '../app/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/layout/Footer'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
