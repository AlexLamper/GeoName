"use client";

import Sidebar from '@/components/common/Sidebar';
import { useAuth } from '@clerk/nextjs';

const LeaderboardPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <Sidebar />}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="mt-4 text-lg">
            This page will display the top 100 users with the highest score.
        </p>
      </main>
    </div>
  );
};

export default LeaderboardPage;
