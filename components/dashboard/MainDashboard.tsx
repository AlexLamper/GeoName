import React from 'react';
import { useUser } from '@clerk/nextjs';
import QuickAccess from './QuickAccess';
import Statistics from './Statistics';
import Popular from './Popular';
import Space from '../common/Space';
import Leaderboard from '../Leaderboard';

const Main = () => {
  const { user } = useUser();

  return (
    <div className="flex-1 p-6 flex flex-col min-h-screen overflow-hidden"> 
      <div className="container mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="opacity-80 mb-8">
          Welcome back, {user ? user.firstName : 'Guest'}!
        </p>
        <QuickAccess />
        <Space height="40px" />
        <Statistics />
        <Space height="40px" />
        <Popular />
        <Space height="40px" />
        <Leaderboard />
        <Space height="40px" />
      </div>
    </div>
  );
};

export default Main;
