import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

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
                <h1 className="text-center text-5xl font-bold font-outfit">Geo<span style={{ color: '#1A5319' }}>Name</span></h1>
                <p className="text-center text-lg font-roboto">Welcome to Geoname</p>
            </SignedIn>
        </ClerkLoaded>
    </div>
  )
}

export default Hero