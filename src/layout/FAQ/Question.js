import React from "react";

export default function Question({ number, question, answer }) {
  return (
    <>
      <div className='grid mt-16 mv:grid-cols-1 md:grid-cols-2'>
        <div className="mv:mb-4 md:mb-0 mv:flex md:block">
          <p className='font-semibold mb-4 mv:mr-2'>{number}</p>
          <p className='font-semibold'>{question}</p>
        </div>
        <p>{answer}</p>
      </div>
      <div className='h-px w-full bg-gray-800 mt-24'></div>
    </>
  )
}
