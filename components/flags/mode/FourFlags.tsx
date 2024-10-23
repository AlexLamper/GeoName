"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import allFlags from '@/data/allFlags';

type CountryFlag = {
  name: string;
  flag: string;
};

const FourFlags: React.FC = () => {
  const [flags, setFlags] = useState<CountryFlag[]>([]);
  const [correctCountry, setCorrectCountry] = useState<CountryFlag | null>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    generateNewFlags();
  }, []);

  const generateNewFlags = () => {
    // Select 4 unique flags randomly
    const getRandomFlags = (flagList: CountryFlag[], count: number) => {
      const shuffled = [...flagList].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const selectedFlags = getRandomFlags(allFlags, 4);
    setFlags(selectedFlags);

    // Pick one random country out of the 4 as the correct one
    const randomCorrectCountry = selectedFlags[Math.floor(Math.random() * selectedFlags.length)];
    setCorrectCountry(randomCorrectCountry);
  };

  const handleFlagClick = (flag: CountryFlag) => {
    if (flag.name === correctCountry?.name) {
      setScore(score + 1);
      generateNewFlags(); // Generate new flags when the correct one is clicked
    } else {
      alert('Wrong flag, try again!');
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display the country name */}
      {correctCountry && (
        <h1 className="text-2xl font-bold mb-4">Select the flag of {correctCountry.name}</h1>
      )}

      {/* Grid for displaying flags */}
      <div className="grid grid-cols-2 gap-6">
        {flags.map((flag) => (
          <Image
            key={flag.flag}
            src={flag.flag}
            alt={`Flag of ${flag.name}`}
            width={256}
            height={192}
            className="w-64 h-48 object-cover rounded-[0.2rem] hover:cursor-pointer border"
            onClick={() => handleFlagClick(flag)} // Handle click on each flag
          />
        ))}
      </div>

      {/* Display the score */}
      <div className="mt-4">
        <p className="text-lg">Score: {score}</p>
      </div>
    </div>
  );
};

export default FourFlags;
