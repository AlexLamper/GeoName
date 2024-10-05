"use client";

import Sidebar from '@/components/common/Sidebar';
import Contact from '@/components/help/Contact';
import FAQ from '@/components/help/FAQ';
import GettingStarted from '@/components/help/GettingStarted';
import LeaderboardPoints from '@/components/help/Leaderboard';
import UsingGeoName from '@/components/help/Using';
import { useAuth } from '@clerk/nextjs';

const HelpPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <Sidebar />}
      <div>
        {/* Shows getting started only if not signed in */}
        {!isSignedIn && <GettingStarted />}
        <UsingGeoName />
        <LeaderboardPoints />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
};

export default HelpPage;
