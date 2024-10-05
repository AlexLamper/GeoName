import React from 'react'

const Mission = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row lg:mb-16 my-0'>
      <div className='w-full p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-8 text-center">
            Our <span style={{ color: '#1A5319' }}>Mission</span>
          </h1>
          <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[70%] max-w-[95%] text-center mx-auto'>
            At GeoName, we believe in making learning geography both engaging and accessible to everyone. We strive to create an interactive experience that sparks curiosity and builds knowledge of the world’s places.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
