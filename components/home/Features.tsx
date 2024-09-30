import React from 'react'
import GreenButton from '../GreenButton'

const Features = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto lg:my-16 my-12 flex flex-col md:flex-row'>
      <div id='left-div' className='w-full p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold font-outfit mb-12 max-w-[80%] mx-auto text-center">
            Free, <span style={{ color: '#1A5319' }}>fun</span>, and effective
          </h1>
          <div className='flex flex-col md:flex-row justify-between max-w-[80%] mx-auto'>
            <div id='card-1' className='rounded-[0.65rem] w-[28%] bg-green-300'>
                <div className='flex flex-col items-center justify-center p-6'>
                    <h2 className='text-center text-2xl font-bold font-outfit'>
                        <span style={{ color: '#1A5319' }}>300+</span> Quizzes
                    </h2>
                    <p className='text-center text-md font-roboto text-[#292929] max-w-[80%] mx-auto'>
                        Learn as many new places as possible with our quizzes.
                    </p>
                </div>
            </div>
            <div id='card-2' className='w-[28%] rounded-[0.65rem] bg-green-300'>
                <div className='flex flex-col items-center justify-center p-6'>
                    <h2 className='text-center text-2xl font-bold font-outfit'>
                        <span style={{ color: '#1A5319' }}>1000+</span> Users
                    </h2>
                    <p className='text-center text-md font-roboto text-[#292929] max-w-[80%] mx-auto'>
                        We have over 1000 users who have learned over 1000 places.
                    </p>
                </div>
            </div>
            <div id='card-3' className='rounded-[0.65rem] w-[28%] bg-green-300'>
                <div className='flex flex-col items-center justify-center p-6'>
                    <h2 className='text-center text-2xl font-bold font-outfit'>
                        Free to use
                    </h2>
                    <p className='text-center text-md font-roboto text-[#292929] max-w-[80%] mx-auto'>
                        GeoName is free to use. No subscriptions, no ads, no
                        tracking.
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div>
          <GreenButton title='Learn more' />
        </div>
      </div>
    </div>
  )
}

export default Features