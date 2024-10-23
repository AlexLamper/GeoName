"use client";

import React, { useState } from 'react';
import BackButton from '@/components/buttons/BackButton';
import Sidebar from '@/components/common/Sidebar';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {
  const [refreshKey] = useState(0);

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
