'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import Sidebar from '@/components/common/Sidebar';
import BackButton from '@/components/common/BackButton';
import Space from '@/components/common/Space';

export default function ProfilePage() {
  const { isLoaded, userId } = useAuth();
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    if (isLoaded && userId) {
      fetch('/api/user/score')
        .then((res) => res.json())
        .then((data) => setScore(data.score))
        .catch((error) => console.error('Error fetching score:', error));
    }
  }, [isLoaded, userId]);

  const updateScore = async (newScore: number) => {
    try {
      const res = await fetch('/api/user/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score: newScore }),
      });
      const data = await res.json();
      setScore(data.score);
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  if (!isLoaded || !userId) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
          <BackButton />
          <Space height="15px" />
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="w-full md:max-w-[60%]">
            <p className="text-lg font-roboto opacity-80 mb-2">User ID: {userId}</p>
            <p className="text-lg font-roboto opacity-80 mb-4">
              Score: {score !== null ? score : 'Loading...'}
            </p>
            <button
              onClick={() => updateScore((score || 0) + 1)}
              className="bg-[#508D4E] text-white py-2 rounded-[0.4rem] text-center hover:bg-[#417C3E] transition-colors duration-300 cursor-pointer block w-full md:w-auto px-6 md:px-12"
            >
              Increase Score
            </button>
          </div>
      </main>
    </div>
  );
}
