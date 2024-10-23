"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import Space from '@/components/common/Space';
import BackButton from '@/components/buttons/BackButton';
import FourFlags from '@/components/flags/mode/FourFlags';
import FourNames from '@/components/flags/mode/FourNames';

type CountryFlag = {
  name: string;
  flag: string;
};

type QuizComponentProps = {
  onCorrectCountryChange: (country: CountryFlag) => void;
};

const QuizTypePage = () => {
  // Extract both quiz and quizType from the URL parameters
  const { quiz, quizType } = useParams<{ quiz: string; quizType: string }>();
  
  const [QuizComponent, setQuizComponent] = useState<React.FC<QuizComponentProps> | null>(null); // Specify correct type
  const [correctCountry, setCorrectCountry] = useState<CountryFlag | null>(null);

  useEffect(() => {
    // Determine the Quiz component based on quizType
    switch (quizType) {
      case 'four-flags':
        setQuizComponent(() => FourFlags);
        break;
      case 'four-names':
        setQuizComponent(() => FourNames);
        break;
      case 'six-flags':
        setQuizComponent(() => FourFlags); // Placeholder for six flags
        break;
      case 'six-names':
        setQuizComponent(() => FourNames); // Placeholder for six names
        break;
      default:
        console.error("Invalid quiz type.");
        return;
    }
  }, [quizType]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Space height="15px" />
        <div className="flex flex-col items-center justify-center text-center">
          {/* Display the correct country name dynamically */}
          <h1 className="text-4xl font-bold mb-2">
            {correctCountry ? (
              <>Select the flag of <span style={{ color: '#1A5319' }}>{correctCountry.name}</span></>
            ) : (
              'Guess the flag of:'
            )}
          </h1>
          <p className="opacity-80 mb-8">
            Quiz: <span style={{ color: '#1A5319' }}>{quizType}</span> with quiz type: <span style={{ color: '#1A5319' }}>{quiz}</span>
          </p>
        </div>

        {/* Render the selected quiz component and pass correctCountry handler */}
        {QuizComponent && (
          <QuizComponent
            onCorrectCountryChange={(country: CountryFlag) => setCorrectCountry(country)}
          />
        )}
      </main>
    </div>
  );
};

export default QuizTypePage;
