import React from 'react'
import { useUser } from '@clerk/nextjs';
import QuickAccess from './QuickAccess';
import Statistics from './Statistics';
import Popular from './Popular';
import Space from '../common/Space';

const Main = () => {
    const { user } = useUser();

  return (
    <div>
        {/* Main Content */}
        <div className="flex-1 ml-0 p-6">
            <div className="container mx-auto">
                {/* Main Header */}
                <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                {/* Subtitle */}
                <p className="text-gray-600 mb-8">
                    Welcome back, {user ? user.firstName : 'Guest'}!
                </p>
                <QuickAccess />
                <Space height="40px" />
                <Statistics />
                <Popular />
            </div>
        </div>
    </div>
  )
}

export default Main