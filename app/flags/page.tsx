"use client";

import Sidebar from '@/components/common/Sidebar';;
import Space from "@/components/common/Space";
import BackButton from '@/components/buttons/BackButton';

const FlagsPage = () => {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Space height='15px' />
        <h1 className="text-4xl font-bold mb-2">Choose the flag quiz <span style={{ color: '#1A5319' }}>type</span></h1>
        <p className="opacity-80 mb-8">
            On this page you can choose a flag quiz type which you want to play the quiz of!
        </p>
      </main>
    </div>
  );
};

export default FlagsPage;
