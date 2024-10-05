import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row lg:mb-24'>
      {/* Left Div */}
      <div id='left-div' className='w-full md:w-1/2 p-4 lg:justify-end justify-start'>
        <Image src='/images/contact.svg' alt='Contact' width={500} height={500} className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96" />
      </div>

      {/* Right Div */}
      <div id='right-div' className='w-full md:w-1/2 flex justify-end p-4 lg:ml-20 md:ml-0'>
        <div className='mb-12 lg:mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-8 max-w-[80%]">
            Get in <span style={{ color: '#1A5319' }}>Touch</span>
          </h1>
          <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[100%] max-w-[95%]'>
            Have any questions, feedback, or issues? Feel free to contact us. We&apos;re here to help!
          </p>
          <div className='mt-8'>
            <p className='font-roboto text-md lg:text-lg opacity-80'>
              Email: <a href='mailto:support@geoname.com' className='text-[#1A5319]'>support@geoname.com</a>
            </p>
            <p className='font-roboto text-md lg:text-lg opacity-80 mt-2'>
              Phone: <a href='tel:+1234567890' className='text-[#1A5319]'>+123-456-7890</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
