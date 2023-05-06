import Link from "next/link"

export default function Contact({ padding, mb }) {
  return (
    <section className={`flex flex-col items-center justify-center ${padding} ${mb}`}>
      <div className='flex flex-col justify-center items-center mv:px-8 md:px-0 mb-12'>
        <p className='text-xs bg-offwhite p-4 rounded-full border border-textblack'>
          Let&#39;s work together
        </p>
        <h2 className='text-center mt-8'>Get in touch</h2>
        <p className='mt-5 text-center mv:w-full md:w-400'>
          If you experience any issues with your vector illustrations or think
          we can work to improve the overall experience of the site, please
          reach out to us.
        </p>
      </div>
      <span className='relative rounded px-8 py-4 mt-4 border border-theme cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in duration-50'>
        <Link
          href='mailto:maxheimer4211@gmail.com'
          className='text-base tracking-wider font-poppins'
        >
          Contact
        </Link>
      </span>
    </section>
  )
}
