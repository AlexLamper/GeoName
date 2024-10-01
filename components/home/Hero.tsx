import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import GreenButton from '../GreenButton'

const Hero = () => {
  return (
    <div className='my-32'>
        <ClerkLoading>
            <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
            <SignedOut>
                <Button className='btn btn-primary'>Sign in</Button>
            </SignedOut>
            <SignedIn>
                <div className='lg:max-w-[80%] md:max-w-[80%] max-w-[85%] mx-auto'>
                    <div id='hero-text' className='mb-16'>
                        <h1 className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mx-auto mb-8">Geo<span style={{ color: '#1A5319' }}>Name</span>, The Best Way to Learn World Placenames</h1>
                        <p className="text-center lg:text-lg md:text-base text-sm font-roboto lg:max-w-[35%] max-w-[70%] mx-auto opacity-80">With GeoName you can learn  placenames the easiest and fastest way. Sign up for free and check out our quizzes.</p>
                    </div>
                    <div id='hero-button' className='flex justify-center items-center mx-auto'>
                        <GreenButton title='Start Now' />
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
            </SignedIn>
        </ClerkLoaded>
    </div>
  )
}

export default Hero