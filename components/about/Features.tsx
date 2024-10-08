import React from 'react'
import Image from 'next/image'

const FeaturesOverview = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto lg:mb-16 my-0 flex flex-col md:flex-row'>
      <div className='w-full p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-12 max-w-[80%] mx-auto text-center">
            Explore Our <span style={{ color: '#1A5319' }}>Features</span>
          </h1>
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-between lg:max-w-[80%] mx-auto'>
            <div id='card-1' className='rounded-[0.65rem] md:w-[28%] w-full bg-[#80AF81]'>
              <div className='flex flex-col p-6'>
                <Image src={'/icons/globe.svg'} alt={'Quiz Icon'} width={35} height={35} />
                <p className='text-2xl font-roboto text-white font-medium max-w-[80%] mt-4'>
                  Fun Quizzes for Everyone
                </p>
              </div>
            </div>
            <div id='card-2' className='rounded-[0.65rem] w-full md:w-[28%] bg-[#80AF81]'>
              <div className='flex flex-col p-6'>
                <Image src={'/icons/trending.svg'} alt={'Trending Icon'} width={35} height={35} />
                <p className='text-2xl font-roboto text-white font-medium max-w-[80%] mt-4'>
                  Competitive Leaderboards
                </p>
              </div>
            </div>
            <div id='card-3' className='rounded-[0.65rem] w-full md:w-[28%] bg-[#80AF81]'>
              <div className='flex flex-col p-6'>
                <Image src={'/icons/location.svg'} alt={'Location Icon'} width={35} height={35} />
                <p className='text-2xl font-roboto text-white font-medium max-w-[80%] mt-4'>
                  Global Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesOverview
