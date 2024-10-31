"use client";

import React, { useEffect, useState } from 'react';
import BackButton from '@/components/buttons/BackButton';
import Sidebar from '@/components/common/Sidebar';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {
  const [refreshKey] = useState(0);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('reloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  }, []);
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Leaderboard key={refreshKey} />
      </main>
    </div>
  );
};

export default LeaderboardPage;
