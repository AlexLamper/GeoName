import React from 'react'

const UsingGeoName = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto lg:mb-16 my-0 flex flex-col md:flex-row'>
      <div className='w-full p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-12 max-w-[80%] mx-auto text-center">
            How to Use <span style={{ color: '#1A5319' }}>GeoName</span>
          </h1>
          <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[70%] max-w-[95%] mx-auto text-center'>
            Choose a country, region, or place type to start your quiz. As you play, earn points by answering questions about the world&apos;s locations. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default UsingGeoName
