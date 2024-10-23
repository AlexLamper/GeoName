"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import allFlags from '@/data/allFlags';

type CountryFlag = {
  name: string;
  flag: string;
};

type SixFlagsProps = {
  onCorrectCountryChange: (country: CountryFlag) => void; // Prop to send the correct country back
};

const SixFlags: React.FC<SixFlagsProps> = ({ onCorrectCountryChange }) => {
  const [flags, setFlags] = useState<CountryFlag[]>([]);
  const [correctCountry, setCorrectCountry] = useState<CountryFlag | null>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    generateNewFlags();
  }, []);

  const generateNewFlags = () => {
    // Select 6 unique flags randomly
    const getRandomFlags = (flagList: CountryFlag[], count: number) => {
      const shuffled = [...flagList].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const selectedFlags = getRandomFlags(allFlags, 6);
    setFlags(selectedFlags);

    // Pick one random country out of the 6 as the correct one
    const randomCorrectCountry = selectedFlags[Math.floor(Math.random() * selectedFlags.length)];
    setCorrectCountry(randomCorrectCountry);

    // Pass the correct country back to the parent component
    onCorrectCountryChange(randomCorrectCountry);
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
      {/* Grid for displaying flags */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
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

export default SixFlags;
