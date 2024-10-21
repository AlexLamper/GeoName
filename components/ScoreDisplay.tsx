'use client';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function ScoreDisplay() {
  const { userId } = useAuth();
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchScore = async () => {
      if (!userId) return;

      const res = await fetch('/api/user/score');
      if (res.ok) {
        const data = await res.json();
        if(data.score !== undefined){
            setScore(data.score);
        }
      } else {
        console.error('Failed to fetch score:', res.statusText);
      }
    };

    fetchScore();
  }, [userId]);

  const handleEarnPoint = async () => {
    if (!userId) return;

    const res = await fetch('/api/user/score', {
      method: 'POST',
    });

    if (res.ok) {
      const data = await res.json();
      if(data.score !== undefined){
        setScore(data.score);
      }
    } else {
      console.error('Failed to update score:', res.statusText);
    }
  };

  return (
    <div>
      <h1>Your Score: {score !== null ? score : 'Loading...'}</h1>
      <button onClick={handleEarnPoint}>Earn Point</button>
    </div>
  );
}
