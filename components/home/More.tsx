import React from 'react'
import GreenButton from '../GreenButton'
import Image from 'next/image'

const More = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row'>
      <div id='left-div' className='w-full md:w-1/2 p-4'>
        <Image src='/images/more.svg' alt='More' width={500} height={500} />
      </div>
      <div id='right-div' className='w-full md:w-1/2 flex justify-end p-4 lg:ml-0 md:ml-0 -ml-20'>
        <div className='mb-12 mt-24'>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold font-outfit mb-8 max-w-[80%]">
                Stay <span style={{ color: '#1A5319' }}>motivated</span>
            </h1>
            <p className='text-gray-600 lg:text-xl text-md font-roboto lg:max-w-[70%] max-w-[95%]'>
                Stay motivated with our quizzes through advanced point systems and leaderboard. Try to climb your way to the top!
            </p>
            <div className='mt-12'>
                <GreenButton title='Learn more' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default More