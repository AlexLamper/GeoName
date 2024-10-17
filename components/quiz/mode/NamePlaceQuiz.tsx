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
  const [attempts, setAttempts] = useState<number>(0);
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    // Select a random place for the quiz
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
        setMessage('✅ Correct');
        setTimeout(() => selectNewPlace(), 500); // Move to the next question after a short delay
      } else {
        handleIncorrectAnswer();
      }
    }
  };

  const handleIncorrectAnswer = (timeOut = false) => {
    const maxAttempts = 3;
    if (timeOut) {
      setMessage(`⏱️ Time's up! The correct answer was ${currentPlace?.name}.`);
    } else {
      setAttempts(attempts + 1);
      if (attempts + 1 >= maxAttempts) {
        setMessage(`❌ Incorrect! The correct answer was ${currentPlace?.name}.`);
      } else {
        setMessage('❌ Incorrect! Try again.');
        if (attempts === 1 && currentPlace) {
          setHint(`Hint: The first letter is "${currentPlace.name.charAt(0)}"`);
        }
      }
    }

    // Automatically move to the next question after a short delay if max attempts reached or time out
    if (timeOut || attempts + 1 >= maxAttempts) {
      setTimeout(() => selectNewPlace(), 3000);
    }
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Type the correct location:</h2>
      
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
