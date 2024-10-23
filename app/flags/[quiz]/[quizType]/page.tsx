"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import Space from '@/components/common/Space';
import FourFlags from '@/components/flags/mode/FourFlags';
import FourNames from '@/components/flags/mode/FourNames';
import SixFlags from '@/components/flags/mode/SixFlags';
import SixNames from '@/components/flags/mode/SixNames';
import FlagBreadcrumbs from '@/components/flags/FlagBreadCrumbs';

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
        setQuizComponent(() => SixFlags);
        break;
      case 'six-names':
        setQuizComponent(() => SixNames);
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
        <FlagBreadcrumbs />
        <Space height="20px" />
        
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-2">
            {quizType === 'four-flags' || quizType === 'six-flags' ? (
              correctCountry ? (
                <>Select the flag of <span style={{ color: '#1A5319' }}>{correctCountry.name}</span></>
              ) : (
                'Guess the flag of:'
              )
            ) : (
              correctCountry ? (
                'Select the name of the flag:'
              ) : (
                'Guess the name of the flag:'
              )
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
