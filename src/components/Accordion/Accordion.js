// 'use client'
// import React from 'react'
// import useOpenController from './useOpenController'

// export const Accordion = ({ section, key }) => {
//   const { isOpen, toggle } = useOpenController(false)
//   console.log(section)
//   return (
//     <div className='accordion-container'>
//       <ExpendableColumn
//         question={section.question}
//         isOpen={isOpen}
//         toggle={toggle}
//       />
//       {isOpen && <TextSection text={section.answer} />}
//       <div className='acc-underline'></div>
//     </div>
//   )
// }

// export const ExpendableColumn = ({ question, toggle }) => {
//   return (
//     <div className='column-container' onClick={toggle}>
//       <p className='text-3xl'>{question}</p>
//     </div>
//   )
// }

// export const TextSection = ({ text }) => {
//   return (
//     <div className='text-container mt-4'>
//       {text}
//     </div>
//   )
// }
