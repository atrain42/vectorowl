'use client'
import React, {useState, useCallback, useEffect} from 'react'
import Image from 'next/image'
import add from '../../../public/images/add.svg'
import remove from '../../../public/images/remove.svg'


import { data } from './data'

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div>
      {data.map((section, index) => (
        <AccordionItem
          key={index}
          section={section}
          index={index}
          isActive={index === activeIndex}
          onClick={handleItemClick}
          className="w-96"
        />
      ))}
    </div>
  )
}

const AccordionItem = ({ section, index, isActive, onClick }) => {
  return (
    <div className='accordion-container w-96'>
      <ExpendableColumn
        question={section.question}
        onClick={() => onClick(index)}
        isActive={isActive}
      />
      {isActive && <TextSection text={section.answer} />}
      <div className='acc-underline'></div>
    </div>
  )
}

const ExpendableColumn = ({ question, onClick, isActive }) => {
  return (
    <div className='column-container w-96' onClick={onClick}>
      <p className='text-3xl'>{question}</p>
      {isActive ? <button><Image className='h-7 w-7' src={remove} alt="addition icon" /></button> : <button><Image className='h-7 w-7' src={add} alt="addition icon" /></button>}
      
    </div>
  )
}

const TextSection = ({ text }) => {
  return <div className='text-container mt-4'>{text}</div>
}
