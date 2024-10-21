import React, { useEffect, useState } from 'react';
import { FaTrophy, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import { Card } from "@/components/cards/Card";

type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  createdAt: Date;
  leaderboardPlacement?: number;
};

const Statistics = () => {
  const [userScore, setUserScore] = useState<number | null>(null);
  const [leaderboardPlacement, setLeaderboardPlacement] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        // Fetch user's score
        const scoreResponse = await fetch('/api/user/score');
        const scoreResult = await scoreResponse.json();

        if (scoreResponse.ok) {
          setUserScore(scoreResult.score);

          // Fetch all users to find current user and leaderboard placement
          const userResponse = await fetch('/api/user');
          const userResult: LeaderboardEntry[] = await userResponse.json();

          if (userResponse.ok) {
            // Ensure scoreResult.id exists in userResult
            const currentUser = userResult.find(user => user.id === scoreResult.id);
            setLeaderboardPlacement(currentUser?.leaderboardPlacement || null);
          } else {
            // Fetch error handling
            const userErrorResult = await userResponse.json(); // Parse error response
            setError(userErrorResult.error || "Failed to fetch user data");
          }
        } else {
          // Score error handling
          setError(scoreResult.error || "Failed to fetch score");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching user statistics");
      }
    };

    fetchUserStats();
  }, []);

  const cardData = [
    {
      id: 1,
      header: 'Your Score:',
      statistic: userScore !== null ? userScore.toString() : 'Loading...',
      icon: <FaTrophy size={30} />,
      href: '#',
    },
    {
      id: 2,
      header: 'Leaderboard Placement:',
      statistic: leaderboardPlacement !== null ? `#${leaderboardPlacement}` : 'Loading...',
      icon: <FaTrophy size={30} />,
      href: '#',
    },
    {
      id: 3,
      header: 'Quizzes Completed:',
      statistic: '', // Populate as necessary
      icon: <FaCheckCircle size={30} />,
      href: '#',
    },
    {
      id: 4,
      header: 'Quizzes Played:',
      statistic: '', // Populate as necessary
      icon: <FaPlayCircle size={30} />,
      href: '#',
    },
  ];

  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold font-outfit lg:max-w-[60%] max-w-[80%] mb-4">
        Your <span style={{ color: '#1A5319' }}>Statistics</span>
      </h1>
      
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message if any */}

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
