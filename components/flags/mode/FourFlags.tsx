"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import allFlags from '@/data/allFlags';

const FourFlags: React.FC = () => {
  const [flags, setFlags] = useState<string[]>([]);

  useEffect(() => {
    // Get flag images
     

    // Select 4 unique flags randomly
    const getRandomFlags = (flagList: string[], count: number) => {
      const shuffled = flagList.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const selectedFlags = getRandomFlags(allFlags, 4);
    setFlags(selectedFlags);
  }, []);

  return (
    <div className="flex ">
      {/* Grid for displaying flags */}
      <div className="grid grid-cols-2 gap-6">
        {flags.map((flag) => (
          <Image
            key={flag}
            src={flag}
            alt="Flag"
            width={256}
            height={192}
            className="w-64 h-48 object-cover rounded-[0.2rem] hover:cursor-pointer border"
          />
        ))}
      </div>
    </div>
  );
};

export default FourFlags;
