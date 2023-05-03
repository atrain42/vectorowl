import bookReturn from '@/../public/images/black-V1/book-return-bw.webp'
import connectFour from '@/../public/images/black-V1/connect-four-bw.webp'
import cyberSecurity from '@/../public/images/black-V1/cyber-security-bw.webp'
import dealMaker from '@/../public/images/black-V1/deal-maker-bw.webp'
import formPacman from '@/../public/images/black-V1/form-pacman-bw.webp'
import loveLetter from '@/../public/images/black-V1/love-letter-bw.webp'
import mailDelivery from '@/../public/images/black-V1/mail-delivery-bw.webp'
import morningCoffee from '@/../public/images/black-V1/morning-coffee-bw.webp'
import multiTasking from '@/../public/images/black-V1/multi-tasking-bw.webp'
import nancyDrew from '@/../public/images/black-V1/nancy-drew-bw.webp'
import puppetMaster from '@/../public/images/black-V1/puppet-master-bw.webp'
import saturdayNight from '@/../public/images/black-V1/saturday-night-bw.webp'
import schoolNotes from '@/../public/images/black-V1/school-notes-bw.webp'
import screenHopper from '@/../public/images/black-V1/screen-hopper-bw.webp'
import skyParadise from '@/../public/images/black-V1/sky-paradise-bw.webp'
import stackedPapers from '@/../public/images/black-V1/stacked-papers-bw.webp'
import takeFlight from '@/../public/images/black-V1/take-flight-bw.webp'
import uniqueUnboxing from '@/../public/images/black-V1/unique-unboxing-bw.webp'


export const blackV1 = [
  {
    image: bookReturn,
    title: 'Book Return',
    collection: 'Black and White Collection',
    alt: 'book return',
    url: 'book-return',
  },
  {
    image: connectFour,
    title: 'Connect Four',
    collection: 'Black and White Collection',
    alt: 'trippy elements concept',
    url: 'connect-four',
  },
  {
    image: cyberSecurity,
    title: 'Cyber Security',
    collection: 'Black and White Collection',
    alt: 'eyes watching your computer',
    url: 'cyber-security',
  },
  {
    image: dealMaker,
    title: 'Deal Maker',
    collection: 'Black and White Collection',
    alt: 'making deals and money concept',
    url: 'deal-maker',
  },
  {
    image: formPacman,
    title: 'Form Pacman',
    collection: 'Black and White Collection',
    alt: 'filling out forms',
    url: 'form-pacman',
  },
  {
    image: loveLetter,
    title: 'Love Letter',
    collection: 'Black and White Collection',
    alt: 'my love is contained in this letter',
    url: 'love-letter',
  },
  {
    image: mailDelivery,
    title: 'Mail Delivery',
    collection: 'Black and White Collection',
    alt: 'get your mail fast',
    url: 'mail-delivery',
  },
  {
    image: morningCoffee,
    title: 'Morning Coffee',
    collection: 'Black and White Collection',
    alt: 'early morning coffee',
    url: 'morning-coffee',
  },
  {
    image: multiTasking,
    title: 'Multi Tasking',
    collection: 'Black and White Collection',
    alt: 'do more at once',
    url: 'multi-tasking',
  },
  {
    image: nancyDrew,
    title: 'Nancy Drew',
    collection: 'Black and White Collection',
    alt: 'solving mysteries with nancy',
    url: 'nancy-drew',
  },
  {
    image: puppetMaster,
    title: 'Puppet Master',
    collection: 'Black and White Collection',
    alt: 'company puppet master',
    url: 'puppet-master',
  },
  {
    image: saturdayNight,
    title: 'Saturday Night',
    collection: 'Black and White Collection',
    alt: 'late night activities concept',
    url: 'saturday-night',
  },
  {
    image: schoolNotes,
    title: 'School Notes',
    collection: 'Black and White Collection',
    alt: 'school notes concept',
    url: 'school-notes',
  },
  {
    image: screenHopper,
    title: 'Screen Hopper',
    collection: 'Black and White Collection',
    alt: 'screen leap frog concept',
    url: 'screen-hopper',
  },
  {
    image: skyParadise,
    title: 'Sky Paradise',
    collection: 'Black and White Collection',
    alt: 'city in the sky concept',
    url: 'sky-paradise',
  },
  {
    image: stackedPapers,
    title: 'Stacked Papers',
    collection: 'Black and White Collection',
    alt: 'layers of printing paper concept',
    url: 'stacked-papers',
  },
  {
    image: takeFlight,
    title: 'Take Flight',
    collection: 'Black and White Collection',
    alt: 'paper airplane flying across screens concept',
    url: 'take-flight',
  },
  {
    image: uniqueUnboxing,
    title: 'Unique Unboxing',
    collection: 'Black and White Collection',
    alt: 'trippy unboxing concept',
    url: 'unique-unboxing',
  },
]

export function getImageByTitle(title) {
  return blackV1.find((image) => image.url === title)
}