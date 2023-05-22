import React from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Term from '../terms/term'

export default function About () {
  const text = ` 
    We are Vector Owl. We create free vector illustrations that you can use in your projects.
    The project was started through experimentation with Adobe Illustrator, and eventually, it was decided
    to offer everyone the illustrations. In addition to the free illustrations we provide on this site, we also work with
    brands to create custom vector art for their project.
  `

  const mission = `
    Our mission is to change the appearance of websites. We are tired of seeing the same vector illustrations
    on every website, we are here to distrupt that trend.
    

  `

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className='flex flex-col items-center mb-40 px-8'
    >
      <NextSeo
        title='Free Vector Illustrations | Collections'
        description='Explore a variety of free vector illustrations to enhance your website. Our vector art is available for download in WebP format. Premium illustrations available.'
      />
      <h2 className='text-center my-16'>About</h2>
      <Term title='Our Mission' text={mission} />
      <Term title='Who are we' text={text} />
      <div className='mv:w-full sm:w-400 mb-8'>
        <p className='font-semibold text-xl mb-1'>A Story</p>
        <p>
          An eagle&#39;s wings cut through the hot summer air like a steak knife
          through butter. The eagle flies aimlessly, not knowing what the future
          holds but eager to fly away from the past. The sun stretches its
          fingers across the sky and softly grazes the eagle&#39;s black
          feathers. The desert is unfamiliar territory for the eagle.<br></br>
          <br></br>While flying over endless miles of sand, the wind rips a seed
          from within the eagle&#39;s fur and sends it hurtling toward the
          earth. The seed sways in the wind like a fishing boat
          navigating rough waters. Eventually, the seed becomes one with the
          wind and moves perfectly with its currents. As the seed falls to the
          ground, it lands on the back of a scorpion, causing the creature to
          become alarmed and quickly burrow deep into the sand. With help from
          the scorpion, the seed is planted deep into the ground. <br></br>
          <br></br>As the days pass, the seed becomes desperate for water. It
          will turn to dust and mix with the surrounding sand if it doesn&#39;t
          receive nourishment soon. As the seed is about to wave the white flag
          and surrender to the scorching heat, raindrops begin pouring down from
          the dark clouds above. The water jolts the seed with hope and causes a
          tiny root to sprout. Day after day, the rain continues, and a
          minuscule branch penetrates the earth&#39;s crust.<br></br>
          <br></br> The tiny branch has blossomed into a towering Kapok tree
          with continued rain. The tree bends and sways in the wind, causing
          seeds to detach from its branches and scatter across the desert. Over
          time, the sandy desert floor becomes adorned with flourishing green
          stems that aspire to grow into their own Kapok tree.<br></br>
          <br></br> Years later, the now lush green land is discovered by a
          native tribe. Playful monkeys swing from tree to tree while determined
          fish swim against the river&#39;s strong currents. The hollow coo of
          an owl leaps across the moisture in the air and echoes off of tree
          trunks. Standing amidst a sea of greenery, a member of the tribe
          points toward the towering trees and proclaims the land to be the
          magnificent Amazon Rainforest.<br></br>
          <br></br>Your idea is the seed. It has the potential to thrive and
          leave a lasting impact on the world, but the unknown holds you back.
          Be like the eagle and traverse unfamiliar territory to pursue your
          dreams. Who knows, maybe one day, your idea will blossom into the next
          Amazon Rainforest.
        </p>
      </div>
    </motion.div>
  )
}
