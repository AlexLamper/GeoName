"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center p-2 transition-colors duration-300 cursor-pointer"
    >
      <FaArrowLeft size={24} color="#508D4E" />
    </button>
  );
};

export default BackButton;
