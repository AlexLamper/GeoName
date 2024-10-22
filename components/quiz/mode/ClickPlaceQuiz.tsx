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
  const [messageCorrect, setCorrectMessage] = useState<string>('');
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
      setMessage(`Click on ${randomPlace.name}`); // Update message with randomPlace
    }
  };

  const handleMarkerClick = (placeId: number) => {
    if (currentPlace && placeId === currentPlace.id) {
      setScore(score + 1);
      setCorrectMessage('');
      setTimeout(() => {
        setCorrectMessage('correct');
      }, 50);
      generateNewPlaces();
    } else {
      setCorrectMessage('');
      setTimeout(() => {
        setCorrectMessage('incorrect');
      }, 50);
    }
  };

  return (
    <div>
      {/* Css for the fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <div className='bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 p-4 rounded-[0.3rem] border'>
        <h2 className="text-2xl font-bold">
          {/* Display the message with styled place name */}
          {message.split(' ').map((word, index) =>
            word === currentPlace?.name ? (
              <span key={index} style={{ color: '#1A5319' }}>{word}</span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h2>
      </div>

      {/* Correct Message */}
      {messageCorrect === 'correct' && (
        <h3
          className="text-lg mb-4 text-green-700 bg-green-100 border border-green-500 border-opacity-20 rounded-[0.4rem] p-3 shadow-md font-bold lg:max-w-[40%] max-w-[90%]"
          style={{
            animation: 'fadeIn 0.7s'
          }}
        >
          ✅ Correct!
        </h3>
      )}

      {/* Incorrect Message */}
      {messageCorrect === 'incorrect' && (
        <h3
          className="text-lg mb-4 text-red-700 bg-red-100 border border-red-500 border-opacity-20 rounded-[0.4rem] p-3 shadow-md font-bold lg:max-w-[40%] max-w-[90%]"
          style={{
            animation: 'fadeIn 0.7s'
          }}
        >
          ❌ Try Again!
        </h3>
      )}

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
