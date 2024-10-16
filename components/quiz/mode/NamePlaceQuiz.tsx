// components/quiz/mode/NamePlaceQuiz.tsx

import React, { useEffect, useState } from 'react';
import QuizMap from '@/components/quiz/QuizMap';

type Place = {
  id: number;
  name: string;
  position: [number, number];
};

interface NamePlaceQuizProps {
  places: Place[];
}

const NamePlaceQuiz: React.FC<NamePlaceQuizProps> = ({ places }) => {
  const [currentPlace, setCurrentPlace] = useState<Place | null>(null);
  const [userInput, setUserInput] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Select a random place for the quiz
    if (places.length > 0) {
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      setCurrentPlace(randomPlace);
    }
  }, [places]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPlace && userInput.trim().toLowerCase() === currentPlace.name.toLowerCase()) {
      setScore(score + 1);
      setMessage('Correct!');

      // Select a new place after a correct answer
      const newPlace = places[Math.floor(Math.random() * places.length)];
      setCurrentPlace(newPlace);
      setUserInput('');
    } else {
      setMessage('Incorrect! Try Again.');
    }
  };

  return (
    <div>
      {currentPlace && (
        <>
          <h2 className="text-2xl mb-4">Where is {currentPlace.name}?</h2>
          <QuizMap
            center={currentPlace.position}
            zoom={10}
            places={[currentPlace]} // Only show the current place
          />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border rounded p-2 mb-4"
              placeholder="Type the place name..."
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
          <p>{message}</p>
          <p>Score: {score}</p>
        </>
      )}
    </div>
  );
};

export default NamePlaceQuiz;
