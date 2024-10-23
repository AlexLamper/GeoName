import React, { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';
import { Card } from "@/components/cards/Card";

// Define LeaderboardEntry type
type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  createdAt: Date;
  leaderboardPlacement?: number;
};

interface StatisticsProps {
  onUpdateScore: () => void; // Prop for score update
}

const Statistics: React.FC<StatisticsProps> = ({ onUpdateScore }) => {
  const [userScore, setUserScore] = useState<number | null>(null);
  const [leaderboardPlacement, setLeaderboardPlacement] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserStats = async () => {
    try {
      const scoreResponse = await fetch('/api/user/score');
      const scoreResult = await scoreResponse.json();

      // Check if the score response is okay
      if (!scoreResponse.ok) {
        // If it's not OK, throw an error with the response message
        throw new Error(scoreResult.error || "Failed to fetch score");
      }

      setUserScore(scoreResult.score);

      const userResponse = await fetch('/api/user');
      const userResult: LeaderboardEntry[] = await userResponse.json();

      // Check if the user response is okay
      if (!userResponse.ok) {
        // If it's not OK, throw an error with the response message
        throw new Error("Failed to fetch user data");
      }

      const currentUser = userResult.find(user => user.id === scoreResult.id);
      setLeaderboardPlacement(currentUser?.leaderboardPlacement || null);
      onUpdateScore(); // Notify parent about the score update

    } catch (err) { // Capture errors
      if (err instanceof Error) {
        console.error("Fetch error:", err.message);
        setError(err.message || "Error fetching user statistics");
      } else {
        console.error("Unexpected error:", err);
        setError("Unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    fetchUserStats();
  }, []); // Fetch stats on mount

  const cardData = [
    {
      id: 1,
      header: 'Your Score:',
      statistic: userScore !== null ? userScore.toString() : 'Loading...',
      icon: <FaTrophy size={30} />,
      href: '/profile',
    },
    {
      id: 2,
      header: 'Leaderboard Placement:',
      statistic: leaderboardPlacement !== null ? `#${leaderboardPlacement}` : 'Loading...',
      icon: <FaTrophy size={30} />,
      href: '/leaderboard',
    },
  ];

  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mb-4">
        Your <span style={{ color: '#1A5319' }}>Statistics</span>
      </h1>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <Card
            key={card.id}
            header={card.header}
            statistic={card.statistic}
            icon={card.icon} 
            href={card.href}          
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
