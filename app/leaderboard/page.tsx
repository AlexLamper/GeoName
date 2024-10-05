"use client";

import Sidebar from '@/components/common/Sidebar';
import Leaderboard from '@/components/Leaderboard';
import { useAuth } from '@clerk/nextjs';

const LeaderboardPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <Sidebar />}
      <main className="flex-1 flex flex-col">
        <Leaderboard />
      </main>
    </div>
  );
};

export default LeaderboardPage;
