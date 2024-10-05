import React from 'react'
import GreenButton from '../buttons/GreenButton'
import Image from 'next/image'

const Introduction = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row lg:mb-24'>
      <div id='left-div' className='w-full md:w-1/2 p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-8 max-w-[80%]">
            Welcome to <span style={{ color: '#1A5319' }}>GeoName</span>
          </h1>
          <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[100%] max-w-[95%]'>
            GeoName is a fun and educational platform that helps you explore and learn placenames from around the globe. Challenge yourself to master every corner of the world!
          </p>
        </div>
        <div>
          <GreenButton title='Start learning' />
        </div>
      </div>
      <div id='right-div' className='w-full md:w-1/2 flex lg:justify-end justify-start p-4 lg:ml-20 md:ml-0 -ml-20'>
        <Image 
          src='/images/introduction.svg' 
          alt='Introduction' 
          className="w-64 h-64 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96"
          width={750} 
          height={750} 
        />
      </div>
    </div>
  )
}

export default Introduction
