"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import allFlags from '@/data/allFlags';

type CountryFlag = {
  name: string;
  flag: string;
};

type SixNamesProps = {
  onCorrectCountryChange: (country: CountryFlag) => void; // Prop to send the correct country back
};

const SixNames: React.FC<SixNamesProps> = ({ onCorrectCountryChange }) => {
  const [flag, setFlag] = useState<CountryFlag | null>(null);
  const [nameOptions, setNameOptions] = useState<CountryFlag[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    generateNewFlagAndOptions();
  }, []);

  const generateNewFlagAndOptions = () => {
    // Select 1 random flag
    const randomFlag = allFlags[Math.floor(Math.random() * allFlags.length)];
    setFlag(randomFlag);

    // Select 5 additional unique flags to create options
    const getRandomFlags = (flagList: CountryFlag[], count: number) => {
      const shuffled = [...flagList].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const selectedOptions = getRandomFlags(allFlags.filter(f => f.name !== randomFlag.name), 5);
    const options = [...selectedOptions, randomFlag]; // Include the correct flag in the options

    // Shuffle the options
    const shuffledOptions = options.sort(() => 0.5 - Math.random());
    setNameOptions(shuffledOptions);

    // Pass the correct country back to the parent component
    onCorrectCountryChange(randomFlag);
  };

  const handleNameClick = (selectedName: CountryFlag) => {
    if (selectedName.name === flag?.name) {
      setScore(score + 1);
      generateNewFlagAndOptions(); // Generate new flag and options when the correct name is clicked
    } else {
      alert('Wrong name, try again!');
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display the flag */}
      {flag && (
        <Image
          src={flag.flag}
          alt={`Flag of ${flag.name}`}
          width={512} // Larger size for better visibility
          height={384}
          className="mb-4 object-cover rounded-[0.2rem] border"
        />
      )}

      {/* Display name options */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {nameOptions.map((option) => (
          <button
            key={option.name}
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded border border-gray-300"
            onClick={() => handleNameClick(option)} // Handle click on each name option
          >
            {option.name}
          </button>
        ))}
      </div>

      {/* Display the score */}
      <div className="mt-4">
        <p className="text-lg">Score: {score}</p>
      </div>
    </div>
  );
};

export default SixNames;
