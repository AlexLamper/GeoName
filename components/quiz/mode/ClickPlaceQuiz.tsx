import React, { useEffect, useState } from 'react';
import QuizMap from '@/components/quiz/QuizMap';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiXCircle } from "react-icons/hi";

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
  const [showMessage, setShowMessage] = useState<boolean>(false);
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
        .slice(0, 3); // Select 3 random places (excluding the current one)

      const newQuizPlaces = [randomPlace, ...randomSelection].sort(() => 0.5 - Math.random());
      setCurrentPlace(randomPlace);
      setQuizPlaces(newQuizPlaces);
      setMessage(`Click on ${randomPlace.name}`);
    }
  };

  const handleMarkerClick = (placeId: number) => {
    if (currentPlace && placeId === currentPlace.id) {
      setScore((prevScore) => prevScore + 1);
      setCorrectMessage('correct');
      generateNewPlaces(); // Generate new places after a correct selection
    } else {
      setCorrectMessage('incorrect');
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000); // Hide after 1 second
  };

  return (
    <div>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }

          .fade-in {
            animation: fadeIn 0.7s forwards;
          }

          .fade-out {
            animation: fadeOut 0.7s forwards;
          }
        `}
      </style>

      {/* Popup Message */}
      {showMessage && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-[101] ${showMessage ? 'fade-in' : 'fade-out'}`}
        >
          {messageCorrect === 'correct' ? (
            <h3 className="flex items-center text-lg mb-4 text-green-700 bg-green-100 border border-green-500 border-opacity-20 rounded-[0.4rem] py-2 px-8 shadow-md font-bold max-w-[100%] mt-2">
              <IoIosCheckmarkCircle className="mr-2" />
              Correct!
            </h3>
          ) : (
            <h3 className="flex items-center text-lg mb-4 text-red-700 bg-red-100 border border-red-500 border-opacity-20 rounded-[0.4rem] py-2 px-8 shadow-md font-bold max-w-[100%] mt-2">
              <HiXCircle className="mr-2" />
              Try Again!
            </h3>
          )}
        </div>
      )}

      <div className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 p-4 rounded-[0.3rem] border">
        <h2 className="text-2xl font-bold">
          {message.split(' ').map((word, index) =>
            word === currentPlace?.name ? (
              <span key={index} style={{ color: '#1A5319', textDecoration: 'underline' }}>{word}</span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h2>
      </div>

      <QuizMap
        center={currentPlace ? currentPlace.position : [0, 0]}
        zoom={8}
        places={quizPlaces}
        onMarkerClick={handleMarkerClick}
      />
      <p className="mt-4">Score: {score}</p>
    </div>
  );
};

export default ClickPlaceQuiz;
