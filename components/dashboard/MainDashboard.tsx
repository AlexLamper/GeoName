import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import QuickAccess from '../common/QuickAccess';
import Statistics from './Statistics';
import Popular from './Popular';
import Space from '../common/Space';
import Leaderboard from '../Leaderboard';

const Main = () => {
  const { user } = useUser();
  const [refreshKey, setRefreshKey] = useState(0); // State to trigger refresh for Leaderboard

  const links = [
    { title: 'Places', href: '/quizzes' },
    { title: 'Flags', href: '/flags' },
    { title: 'Leaderboard', href: '/leaderboard' },
    { title: 'Profile', href: '/profile' },
    { title: 'Geo Facts', href: '/geographical-facts' },
  ];

  // Function to update score and refresh leaderboard
  const handleUpdateScore = () => {
    setRefreshKey(prevKey => prevKey + 1); // Increment key to trigger re-render of Leaderboard
  };

  return (
    <div className="flex-1 p-6 flex flex-col min-h-screen overflow-hidden">
      <div className="container mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="opacity-80 mb-8">
          Welcome back, {user ? user.firstName : 'Guest'}!
        </p>
        <QuickAccess links={links} />
        <Space height="40px" />
        
        {/* Pass handleUpdateScore to Statistics component */}
        <Statistics onUpdateScore={handleUpdateScore} />
        
        <Space height="40px" />
        <Popular />
        <Space height="40px" />
        
        {/* Use key to refresh Leaderboard when score updates */}
        <Leaderboard key={refreshKey} />
        
        <Space height="40px" />
      </div>
    </div>
  );
};

export default Main;