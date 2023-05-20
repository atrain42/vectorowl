// import img from '../images/11test.webp'

const SectionHeading = ({ title, description, padding }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${padding} mv:px-8 md:px-0 mb-12`}
    >
      <h2 className='text-center text-4xl'>{title}</h2>
      <p className='mt-5 text-center mv:w-full md:w-400'>
        {description}
      </p>
    </div>
  )
};

export default SectionHeading;
