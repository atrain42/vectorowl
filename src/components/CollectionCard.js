import Link from 'next/link'
import ArrowLink from './ArrowLink'

export default function Collection({title, description, col, id, line, icon }) {
  return (
    <Link className='hover:bg-[#0780801f]' href={`/illustrations/${id}`}>
      <div className='border rounded-sm border-[#222222] p-12 mv:px-6 md:px-12 outline-zinc-400 flex flex-col justify-between items-start cursor-pointer mv:hover:none md:hover:shadow-black transition-all ease-in 0.75s'>
        <span className='flex items-center mb-4'>
          <div className='w-0.75 h-5 bg-black'></div>
          <p className='ml-2'>{title}</p>
        </span>
        <h3 className='text-3xl mb-4'>{col}</h3>
        <div className='flex flex-col items-start'>
          <p className='mb-12 text-left'>{description}</p>
          <ArrowLink line={line} icon={icon} title='Visit' />
        </div>
      </div>
    </Link>
  )
}
