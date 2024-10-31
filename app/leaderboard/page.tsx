"use client";

import React, { useEffect } from 'react';
import BackButton from '@/components/buttons/BackButton';
import Sidebar from '@/components/common/Sidebar';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('hasReloaded');
  
    if (!hasReloaded) {
      sessionStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);  

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Leaderboard />
      </main>
    </div>
  );
};

export default LeaderboardPage;
