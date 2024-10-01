import React from 'react'
import GreenButton from '../GreenButton'
import Image from 'next/image'

const About = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row'>
      <div id='left-div' className='w-full md:w-1/2 p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold font-outfit mb-8 max-w-[80%]">
            Free, <span style={{ color: '#1A5319' }}>fun</span>, and effective
          </h1>
          <p className='text-gray-600 lg:text-xl text-md font-roboto lg:max-w-[70%] max-w-[95%]'>
            Learning with GeoName is fun; you can learn infinite placenames. Earn points through playing our quizzes, and trying to learn as many new places as possible!
          </p>
        </div>
        <div>
          <GreenButton title='Learn more' />
        </div>
      </div>
      <div id='right-div' className='w-full md:w-1/2 flex justify-end p-4 lg:ml-0 md:ml-0 -ml-20'>
        <Image src='/images/about.svg' alt='About' width={550} height={550} />
      </div>
    </div>
  )
}

export default About