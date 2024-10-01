import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto lg:my-16 my-12 flex flex-col md:flex-row'>
      <div className='w-full p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold font-outfit mb-12 max-w-[80%] mx-auto text-center">
            Our <span style={{ color: '#1A5319' }}>features</span>
          </h1>
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-between max-w-[80%] mx-auto'>
            <div id='card-1' className='rounded-[0.65rem] w-full md:w-[28%] bg-[#80AF81]'>
              <div className='flex flex-col p-6'>
                <Image src={'/icons/globe.svg'} alt={'Globe Icon'} width={35} height={35} />
                <p className='text-2xl font-roboto text-white font-medium max-w-[80%] mt-4'>
                  Free to use and play
                </p>
              </div>
            </div>
            <div id='card-2' className='rounded-[0.65rem] w-full md:w-[28%] bg-[#80AF81]'>
              <div className='flex flex-col p-6'>
                <Image src={'/icons/location.svg'} alt={'Location Icon'} width={35} height={35} />
                <p className='text-2xl font-roboto text-white font-medium max-w-[80%] mt-4'>
                  Learn every location on earth
                </p>
              </div>
            </div>
            <div id='card-3' className='rounded-[0.65rem] w-full md:w-[28%] bg-[#80AF81]'>
              <div className='flex flex-col p-6'>
                <Image src={'/icons/trending.svg'} alt={'Trending Icon'} width={35} height={35} />
                <p className='text-2xl font-roboto text-white font-medium max-w-[80%] mt-4'>
                  Climb the leaderboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features