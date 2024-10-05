"use client";

import Sidebar from '@/components/common/Sidebar';
import { useAuth } from '@clerk/nextjs';

const HelpPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <Sidebar />}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Help</h1>
        <p className="mt-4 text-lg">
          This is the help page. It will contain information about how to use the platform.
        </p>
      </main>
    </div>
  );
};

export default HelpPage;
