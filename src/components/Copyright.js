export default function Copyright() {
  const getYear = () => {
    const date = new Date()
    let year = date.getFullYear()

    return year
  }

  return (
    <p className='text-left footer-link'>
      &#xA9; Vector Owl, {getYear()}. All Rights Reserved.
    </p>
  )
}
