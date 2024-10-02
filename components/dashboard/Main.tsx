import React from 'react'
import { useUser } from '@clerk/nextjs';

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

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Card Title 1</h3>
                        <p className="text-gray-600">This is a description of the first card. Include any relevant stats or info here.</p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Card Title 2</h3>
                        <p className="text-gray-600">This is a description of the second card. Include any relevant stats or info here.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Card Title 3</h3>
                        <p className="text-gray-600">This is a description of the third card. Include any relevant stats or info here.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main