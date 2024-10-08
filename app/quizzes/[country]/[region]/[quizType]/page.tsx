"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import SimpleMap from '@/components/quiz/QuizMap';

// Define the Place type
type Place = {
  id: number;
  name: string;
  position: [number, number]; // Correctly using tuple for position
};

const QuizTypePage = () => {
  const searchParams = useSearchParams(); // Get the current search parameters

  // Extract parameters from the URL
  const country = searchParams.get('country') || '';
  const region = searchParams.get('region') || '';
  const quizType = searchParams.get('quizType') || '';

  // Sample data for demonstration; replace with your actual places data
  const places: Place[] = [
    { id: 1, name: 'City 1', position: [51.505, -0.09] as [number, number] }, // Tuple for [latitude, longitude]
    { id: 2, name: 'City 2', position: [51.51, -0.1] as [number, number] },  // Tuple for [latitude, longitude]
    // Add more places as needed
  ];

  return (
    <div>
      <h1>
        {country} - {quizType} in {region}
      </h1>
      <SimpleMap center={[51.505, -0.09]} zoom={10} places={places} />
    </div>
  );
};

export default QuizTypePage;