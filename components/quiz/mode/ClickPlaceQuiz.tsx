// components/quiz/mode/ClickPlaceQuiz.tsx

import React, { useEffect, useState } from 'react';
import QuizMap from '@/components/quiz/QuizMap';

type Place = {
  id: number;
  name: string;
  position: [number, number];
};

interface ClickPlaceQuizProps {
  places: Place[];
}

const ClickPlaceQuiz: React.FC<ClickPlaceQuizProps> = ({ places }) => {
  const [currentPlace, setCurrentPlace] = useState<Place | null>(null);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Select a random place for the quiz
    if (places.length > 0) {
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      setCurrentPlace(randomPlace);
      setMessage(`Click on ${randomPlace.name}`);
    }
  }, [places]);

  const handleMarkerClick = (placeId: number) => {
    if (currentPlace && placeId === currentPlace.id) {
      setScore(score + 1);
      setMessage('Correct!');

      // Select a new place after a correct answer
      const newPlace = places[Math.floor(Math.random() * places.length)];
      setCurrentPlace(newPlace);
      setMessage(`Click on ${newPlace.name}`);
    } else {
      setMessage('Try Again!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">{message}</h2>
      <QuizMap
        center={currentPlace ? currentPlace.position : [0, 0]}
        zoom={10}
        places={places}
        onMarkerClick={handleMarkerClick} // Pass down marker click handler
      />
      <p>Score: {score}</p>
    </div>
  );
};

export default ClickPlaceQuiz;