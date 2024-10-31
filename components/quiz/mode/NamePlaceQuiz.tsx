import React, { useEffect, useState } from 'react';
import QuizMap from '@/components/quiz/QuizMap';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiXCircle } from "react-icons/hi";

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
  const [attempts, setAttempts] = useState<number>(0);
  const [hint, setHint] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false); // For popup visibility
  const [messageCorrect, setMessageCorrect] = useState<string>(''); // For correct/incorrect message

  useEffect(() => {
    if (places.length > 0) {
      selectNewPlace();
    }
  }, [places]);

  const selectNewPlace = () => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    setCurrentPlace(randomPlace);
    setUserInput('');
    setMessage('');
    setHint(null);
    setAttempts(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPlace) {
      if (userInput.trim().toLowerCase() === currentPlace.name.toLowerCase()) {
        setScore(score + 1);
        setMessageCorrect('correct');
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          selectNewPlace();
        }, 1000);
      } else {
        handleIncorrectAnswer();
      }
    }
  };

  const handleIncorrectAnswer = (timeOut = false) => {
    const maxAttempts = 3;
    if (timeOut) {
      setMessage(`⏱️ Time's up! The correct answer was ${currentPlace?.name}.`);
      setMessageCorrect('incorrect');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } else {
      setAttempts(attempts + 1);
      if (attempts + 1 >= maxAttempts) {
        setMessage(`❌ Incorrect! The correct answer was ${currentPlace?.name}.`);
        setMessageCorrect('incorrect');
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          selectNewPlace();
        }, 3000);
      } else {
        setMessage('❌ Incorrect! Try again.');
        if (attempts === 1 && currentPlace) {
          setHint(`Hint: The first letter is "${currentPlace.name.charAt(0)}"`);
        }
      }
    }
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Type the correct location:</h2>

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
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-[101] ${
            showMessage ? 'fade-in' : 'fade-out'
          }`}
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

      {currentPlace && (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col mt-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border border-gray-300 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:max-w-[40%]"
              placeholder="Enter the place name..."
              autoFocus
            />

            <button
              type="submit"
              className="bg-[#508D4E] text-white p-2 rounded hover:bg-[#51864f] transition lg:max-w-[40%]"
            >
              Submit
            </button>
          </form>

          {message && (
            <div className={`mt-2 text-center p-2 rounded max-w-[40%] ${message.includes('Correct') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}

          {hint && (
            <div className="mt-2 text-gray-500 italic">
              {hint}
            </div>
          )}
          <QuizMap
            center={currentPlace.position}
            zoom={10}
            places={[currentPlace]}
          />
          <div className="mt-4">
            <p className="text-gray-600">Score: {score}</p>
            <p className="text-gray-600">Attempts: {attempts}/3</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NamePlaceQuiz;
