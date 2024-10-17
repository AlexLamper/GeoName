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
  const [quizPlaces, setQuizPlaces] = useState<Place[]>([]);

  useEffect(() => {
    generateNewPlaces();
  }, [places]);

  const generateNewPlaces = () => {
    if (places.length > 0) {
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      const filteredPlaces = places.filter((place) => place.id !== randomPlace.id);
      const randomSelection = filteredPlaces
        .sort(() => 0.5 - Math.random())
        .slice(0, 4); // Select 4 random places (excluding the current one)

      // Include the correct place in the set of places to display
      const newQuizPlaces = [randomPlace, ...randomSelection].sort(() => 0.5 - Math.random());
      setCurrentPlace(randomPlace);
      setQuizPlaces(newQuizPlaces);
      setMessage(`Click on ${randomPlace.name}`);
    }
  };

  const handleMarkerClick = (placeId: number) => {
    if (currentPlace && placeId === currentPlace.id) {
      setScore(score + 1);
      setMessage('Correct!');
      generateNewPlaces();
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
        places={quizPlaces}
        onMarkerClick={handleMarkerClick}
      />
      <p className="mt-4">Score: {score}</p>
    </div>
  );
};

export default ClickPlaceQuiz;