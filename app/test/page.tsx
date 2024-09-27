import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'

const TestPage = () => {
  return (
    <div>
        <ModeToggle />
        <h1 className='font-outfit text-3xl font-bold'>Test Page</h1>
        <p className='text-lg font-roboto'>This is a test page</p>
    </div>
  )
}

export default TestPage