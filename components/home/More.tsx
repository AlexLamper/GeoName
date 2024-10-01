import React from 'react'
import Image from 'next/image'

const More = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row'>
      {/* Left Div */}
      <div id='left-div' className='w-full md:w-1/2 p-4 lg:justify-end justify-start'>
        <Image src='/images/more.svg' alt='More' width={500} height={500} className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96" />
      </div>

      {/* Right Div */}
      <div id='right-div' className='w-full md:w-1/2 flex justify-end p-4 lg:ml-20 md:ml-0'>
        <div className='mb-12 lg:mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-8 max-w-[80%]">
            Stay <span style={{ color: '#1A5319' }}>motivated</span>
          </h1>
          <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[70%] max-w-[95%]'>
            Stay motivated with our quizzes through advanced point systems and leaderboard. Try to climb your way to the top!
          </p>
        </div>
      </div>
    </div>
  )
}

export default More
