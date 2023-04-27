import homeOffice from '../../public/images/1.0-black&white/home-office-bw.webp'
import morningCoffee from '../../public/images/1.0-black&white/morning-coffee-bw.webp'
import formPacman from '@/../public/images/1.0-black&white/form-pacman-bw.webp'
import trippyTracks from '../../public/images/1.0-black&white/trippy-tracks-bw.webp'
import screenHopper from '@/../public/images/1.0-black&white/screen-hopper-bw.webp'
import skyRetreat from '../../public/images/1.0-black&white/sky-retreat-bw.webp'
import connectFour from '../../public/images/1.0-black&white/connect-four-bw.webp'
import elderScrolls from '../../public/images/1.0-black&white/elder-scrolls-bw.webp'
import cyberSecurity from '../../public/images/1.0-black&white/cyber-security-bw.webp'
import schoolNotes from '../../public/images/1.0-black&white/school-notes-bw.webp'
import saturdayNight from '@/../public/images/1.0-black&white/saturday-night-bw.webp'
import boardMeeting from '@/../public/images/1.0-black&white/board-meeting-bw.webp'
import puppetMaster from '../../public/images/1.0-black&white/puppet-master-bw.webp'
import screenCanvas from '@/../public/images/1.0-black&white/screen-canvas-bw.webp'
import artClass from '../../public/images/1.0-black&white/art-class-bw.webp'

import solarSearch from '../../public/images/1.0-black&white/solar-search-bw.webp'
import movieScript from '../../public/images/1.0-black&white/movie-script-bw.webp'
import mailPortal from '../../public/images/1.0-black&white/mail-portal-bw.webp'

export const BlackV1 = [
  {
    image: morningCoffee,
    title: 'Morning Coffee',
    collection: 'Black and White Collection',
    alt: 'early morning coffee',
    price: '$3',
    url: 'morning-coffee',
  },
  {
    image: artClass,
    title: 'Art Class',
    collection: 'Black and White Collection',
    alt: 'painting in art class',
    price: '$3',
    url: 'art-class',
  },
  {
    image: schoolNotes,
    title: 'School Notes',
    collection: 'Black and White Collection',
    alt: 'school notes concept',
    price: '$3',
    url: 'school-notes',
  },
  {
    image: trippyTracks,
    title: 'Trippy Tracks',
    collection: 'Black and White Collection',
    alt: 'perspecitve train tracks concept',
    price: '$3',
    url: 'trippy-tracks',
  },
  {
    image: formPacman,
    title: 'Form Pacman',
    collection: 'Black and White Collection',
    alt: 'perspecitve train tracks concept',
    price: '$3',
  },
  {
    image: puppetMaster,
    title: 'Puppet Master',
    collection: 'Black and White Collection',
    alt: 'company puppet master',
    price: '$3',
  },
  {
    image: connectFour,
    title: 'Connect Four',
    collection: 'Black and White Collection',
    alt: 'trippy elements concept',
    price: '$3',
  },
  {
    image: screenHopper,
    title: 'Screen Hopper',
    collection: 'Black and White Collection',
    alt: 'trippy elements concept',
    price: '$3',
  },
  {
    image: elderScrolls,
    title: 'Elder Scrolls',
    collection: 'Black and White Collection',
    alt: 'elder scrolls',
    price: '$3',
  },
  {
    image: skyRetreat,
    title: 'Sky Retreat',
    collection: 'Black and White Collection',
    alt: 'city in the sky concept',
    price: '$3',
  },
  {
    image: saturdayNight,
    title: 'Saturday Night',
    collection: 'Black and White Collection',
    alt: 'city in the sky concept',
    price: '$3',
  },
  {
    image: mailPortal,
    title: 'Mail Portal',
    collection: 'Black and White Collection',
    alt: 'mail teleportation',
    price: '$3',
  },
  {
    image: boardMeeting,
    title: 'Board Meeting',
    collection: 'Black and White Collection',
    alt: 'mail teleportation',
    price: '$3',
  },
  {
    image: solarSearch,
    title: 'Solar Search',
    collection: 'Black and White Collection',
    alt: 'using computers in space',
    price: '$3',
  },
  {
    image: screenCanvas,
    title: 'Screen Canvas',
    collection: 'Black and White Collection',
    alt: 'using computers in space',
    price: '$3',
  },
  {
    image: movieScript,
    title: 'Movie Script',
    collection: 'Black and White Collection',
    alt: 'movie script',
    price: '$3',
  },
  {
    image: homeOffice,
    title: 'Two Three',
    collection: 'Black and White Collection',
    alt: 'home office setup concept',
    price: '$3',
  },
  {
    image: cyberSecurity,
    title: 'Cyber Security',
    collection: 'Black and White Collection',
    alt: 'eyes watching your computer',
    price: '$3',
  },
]

export function getImageByTitle(title) {
  return BlackV1.find((image) => image.url === title)
}