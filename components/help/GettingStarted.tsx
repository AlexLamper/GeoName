import React from 'react'
import GreenButton from '../buttons/GreenButton'
import Image from 'next/image'
import { 
    SignUpButton,
} from '@clerk/nextjs';

const GettingStarted = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row lg:mb-24'>
      <div id='left-div' className='w-full md:w-1/2 p-4'>
        <div className='mb-12 mt-24'>
            <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-8 max-w-[80%]">
                Getting <span style={{ color: '#1A5319' }}>Started</span>
            </h1>
            <p className='opacity-80 lg:text-xl text-md font-roboto lg:max-w-[100%] max-w-[95%]'>
                Create an account or log in to start your geography adventure! Once logged in, you can begin exploring our quizzes and tracking your progress.
            </p>
        </div>
        <div>
            <SignUpButton mode="modal">
                <GreenButton title='Sign up' />
            </SignUpButton>
        </div>
      </div>
      <div id='right-div' className='w-full md:w-1/2 flex lg:justify-end justify-start p-4 lg:ml-20 md:ml-0'>
        <Image 
          src='/images/getting-started.svg' 
          alt='Getting Started' 
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96"
          width={550} 
          height={550} 
        />
      </div>
    </div>
  )
}

export default GettingStarted
