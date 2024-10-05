import React from 'react'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row'>
      <div id='left-div' className='w-full md:w-1/2 p-4 lg:justify-end justify-start'>
        <Image src='/images/how.svg' alt='How It Works' width={400} height={400} className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72" />
      </div>

      <div id='right-div' className='w-full md:w-1/2 flex justify-end p-4 lg:ml-20 md:ml-0'>
        <div className='mb-12 lg:mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-8 max-w-[80%]">
            How It <span style={{ color: '#1A5319' }}>Works</span>
          </h1>
          <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[100%] max-w-[95%]'>
            Select a country, pick a region, and start your quiz journey! Earn points as you go and compare your progress on our leaderboard.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
