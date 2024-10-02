import React from 'react'
import GreenButton from '../GreenButton'
import { SignedOut } from '@clerk/nextjs';

const Hero = () => {
  return (
    <div className='my-32'>
        <div className='lg:max-w-[80%] md:max-w-[80%] max-w-[85%] mx-auto'>
            <div id='hero-text' className='mb-16'>
                <h1 className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mx-auto mb-8">Geo<span style={{ color: '#1A5319' }}>Name</span>, The Best Way to Learn World Placenames</h1>
                <p className="text-center lg:text-lg md:text-base text-sm font-roboto lg:max-w-[35%] max-w-[70%] mx-auto opacity-80">With GeoName you can learn  placenames the easiest and fastest way. Sign up for free and check out our quizzes.</p>
            </div>
            <div id='hero-button' className='flex justify-center items-center mx-auto'>
                <SignedOut>
                    <div className="flex justify-center items-center w-full max-w-[18rem] mx-auto">
                        <GreenButton title='Start Now' height='h-[4rem] p-6' fontSize='text-[1.4rem]' width='w-full max-w-[18rem]' url='/sign-in' />
                    </div>
                </SignedOut>
            </div>
            <div id='hero-about' className='flex justify-center items-center space-x-4 mb-16 pt-32 pb-20 opacity-80 lg:text-xl md:text-md text-sm'>
                <div className='border-r-[1px] px-4 pr-4'>
                    <p>300+ Quizzes</p>
                </div>
                <div className='border-r-[1px] px-4 pl-0 pr-4'>
                    <p>1000+ Users</p>
                </div>
                <div className='px-4 pl-0 pr-4'> 
                    <p>Free to use</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero