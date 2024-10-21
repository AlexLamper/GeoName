import React, { useEffect, useState } from 'react';
import { FaTrophy, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import { Card } from "@/components/cards/Card";

const Statistics = () => {
  const [userScore, setUserScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch user's score from the API
  useEffect(() => {
    const fetchUserScore = async () => {
      try {
        const response = await fetch('/api/user/score'); // Update this to the correct endpoint for user score
        const result = await response.json();

        if (response.ok) {
          setUserScore(result.score);
        } else {
          setError(result.error || "Failed to fetch score");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching user score");
      }
    };

    fetchUserScore();
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
      header: 'Quizzes Completed:',
      statistic: '',
      icon: <FaCheckCircle size={30} />,
      href: '#',
    },
    {
      id: 3,
      header: 'Quizzes Played:',
      statistic: '',
      icon: <FaPlayCircle size={30} />,
      href: '#',
    },
    {
      id: 4,
      header: 'Leaderboard Placement:',
      statistic: '#20',
      icon: <FaTrophy size={30} />,
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
