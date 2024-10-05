"use client";

import Sidebar from '@/components/common/Sidebar';
import { useAuth } from '@clerk/nextjs';

const AboutPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <Sidebar />}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4 text-lg">
          This platform allows users to learn about all the world&apos;s placenames.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
