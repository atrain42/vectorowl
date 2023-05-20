import React from 'react'

import Question from './Question'
import SectionHeading from '@/components/SectionHeading'

const questions = [
  {
    number: '1.',
    question: 'Do I own the free illustrations?',
    answer:
      'No. Although you can use them however you please, you are prohibited from reselling or redistributing any images obtained from this website as your own',
  },
  {
    number: '2.',
    question: 'What format are the images in?',
    answer:
      'All images on the site are in .webp format. When you download an image, it will have a .webp file extension. We did this because .webp is the best format for images being displayed on the web. If you want additional file extensions, please reach out and we will supply your image in the specified format.',
  },
  {
    number: '3.',
    question: 'Do I have to use image attributes?',
    answer:
      'Yes. For free illustrations, you must include an image attribution. You can either put the attribution underneath each illustration, or include one somewhere on your site to account for all use cases.',
  },
  {
    number: '4.',
    question: 'How do I get custom illustrations?',
    answer:
      'For inquiries on custom illustrations for your project, please visit the hire us page. Here, you can fill out a form and we will get back with you via email.',
  },
]

export default function Faq() {
  return (
    <section>
      <SectionHeading
        title='FAQ'
        description='Frequently asked questions'
        padding='pt-80'
      />
      <div className='mv:px-8 md:px-20'>
        {questions.map((question, index) => {
          return (
            <Question
              key={index}
              number={question.number}
              question={question.question}
              answer={question.answer}
            />
          )
        })}
      </div>
    </section>
  )
}
