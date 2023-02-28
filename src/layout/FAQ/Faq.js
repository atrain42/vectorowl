import React from 'react'

import Question from './Question'
import SectionHeading from '@/components/SectionHeading'

const questions = [
  {
    number: '1.',
    question: 'Can I share images?',
    answer:
      "No. When you purchase an image, only you obtain the rights to that image and only you can use it for personal use. You can't share images with other people; this violates our terms of service.",
  },
  {
    number: '2.',
    question: 'Can I get a refund?',
    answer:
      'Unfortunately at HollowBox, we do not offer refunds. All sales on this site are final and no returns are accepted. If there are any issues with your purchase, please contact us and we will resolve it.',
  },
  {
    number: '3.',
    question: 'What format are the images in?',
    answer:
      'All images on the site are in .webp format. When you download an image, it will have a .webp file extension. We did this because .webp is the best format for images being displayed on the web. If you want additional file extensions, please reach out and we will supply your image in the specified format.',
  },
  {
    number: '4.',
    question: 'Do I own the rights to the images I download?',
    answer:
      "Yes! You own all the rights of the images you download as long as you paid for them. You are free to use them however you want and there is no need to give us credit (unless you want to). However, you can't resell the images as your own.",
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
