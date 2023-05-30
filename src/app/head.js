import image from '../../public/images/twitter-card.png'

export default function Head() {
  return (
    <>
      <title>Free Vector Illustrations for Your Website</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta
        property='og:image'
        content={image}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@_PixelPrism' />
      <meta name='twitter:title' content='Unique Vector Illustrations' />
      <meta
        name='twitter:description'
        content='Enjoy our collections of free vector illustrations'
      />
      <meta
        name='twitter:image'
        content={image}
      />
      <meta
        name='description'
        content='Explore a variety of free vector illustrations to enhance your website. Our vector art is available for download in WebP format. Premium illustrations available.'
      />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
