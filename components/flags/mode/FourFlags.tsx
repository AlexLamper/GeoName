"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import allFlags from '@/data/allFlags';

type CountryFlag = {
  name: string;
  flag: string;
};

type FourFlagsProps = {
  onCorrectCountryChange: (country: CountryFlag) => void; // Callback to send the correct country back
};

const FourFlags: React.FC<FourFlagsProps> = ({ onCorrectCountryChange }) => {
  const [flags, setFlags] = useState<CountryFlag[]>([]);
  const [correctCountry, setCorrectCountry] = useState<CountryFlag | null>(null);
  const [score, setScore] = useState<number>(0);
  const [totalFlags] = useState<number>(allFlags.length); // Total number of available flags
  const [guessedFlags, setGuessedFlags] = useState<string[]>([]); // Store guessed flag names
  const [timer, setTimer] = useState<number>(0); // Timer state
  const [lives, setLives] = useState<number>(3); // Initialize with 3 lives
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false); // Flag to track if quiz is finished

  useEffect(() => {
    if (isQuizFinished) {
      updateScoreOnFinish(score);
    } else {
      generateNewFlags(); 
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [isQuizFinished, score]);  

  const generateNewFlags = () => {
    const getRandomFlags = (flagList: CountryFlag[], count: number) => {
      const filteredList = flagList.filter(flag => !guessedFlags.includes(flag.name)); // Filter out guessed flags
      const shuffled = [...filteredList].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const selectedFlags = getRandomFlags(allFlags, 4);

    if (selectedFlags.length === 0 || lives === 0) {
      setIsQuizFinished(true); // Finish quiz if no flags left or no lives left
      alert("Quiz finished! Your score: " + score);
      updateScoreOnFinish(score); // Update user score at the end of the quiz
    } else {
      const randomCorrectCountry = selectedFlags[Math.floor(Math.random() * selectedFlags.length)];
      setCorrectCountry(randomCorrectCountry);
      onCorrectCountryChange(randomCorrectCountry);
    }

    setFlags(selectedFlags);
  };

  const handleFlagClick = (flag: CountryFlag) => {
    if (flag.name === correctCountry?.name) {
      setScore(prev => prev + 1); // Increment score for a correct guess
      setGuessedFlags(prev => [...prev, flag.name]); // Add guessed flag to the list
      generateNewFlags(); // Generate new flags when the correct one is clicked
    } else {
      setLives(prev => prev - 1); // Deduct a life for an incorrect guess
      if (lives - 1 <= 0) {
        setIsQuizFinished(true);
        alert("Out of lives! Final score: " + score);
        updateScoreOnFinish(score); // Update user score if out of lives
      }
    }
  };

  const updateScoreOnFinish = async (finalScore: number) => {
    try {
      await fetch('/api/user/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score: finalScore }), // Send the final score directly
      });
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display flags */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-6">
        {flags.map((flag) => (
          <Image
            key={flag.flag}
            src={flag.flag}
            alt={`Flag of ${flag.name}`}
            width={320} // Increased width for lg screens
            height={240} // Increased height for lg screens
            className="lg:w-80 lg:h-60 md:w-64 md:h-48 sm:w-48 sm:h-36 xs:w-36 xs:h-28 object-cover rounded-[0.2rem] hover:cursor-pointer border"
            onClick={() => handleFlagClick(flag)} // Handle click on each flag
          />
        ))}
      </div>

      {/* Display the score, progress, and lives */}
      <div className="mt-4 mx-auto">
        <p className="text-lg text-center">Score: {score}</p>
        <p className="text-lg text-center">Lives Left: {"❤️".repeat(lives)}</p>
        <p className="text-lg text-center">Flags Guessed: {guessedFlags.length}/{totalFlags}</p>
        <p className="text-lg text-center">Time Elapsed: {timer}s</p>
      </div>

      {/* Reset Button */}
      {isQuizFinished && (
        <button 
          onClick={() => {
            setScore(0);
            setGuessedFlags([]);
            setTimer(0);
            setLives(3); // Reset lives
            setIsQuizFinished(false);
            generateNewFlags();
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Restart Quiz
        </button>
      )}
    </div>
  );
};

export default FourFlags;
