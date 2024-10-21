'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';

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
    <div>
      <h1>Profile</h1>
      <p>User ID: {userId}</p>
      <p>Score: {score !== null ? score : 'Loading...'}</p>
      <button onClick={() => updateScore((score || 0) + 1)}>Increase Score</button>
    </div>
  );
}
