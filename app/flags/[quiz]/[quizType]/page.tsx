"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import Space from '@/components/common/Space';
import BackButton from '@/components/buttons/BackButton';
import FourFlags from '@/components/flags/mode/FourFlags';
import FourNames from '@/components/flags/mode/FourNames';

const QuizTypePage = () => {
  const { quizType } = useParams<{ quiz: string; quizType: string }>();
  const [QuizComponent, setQuizComponent] = useState<React.FC | null>(null);

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
        <Space height='15px' />
        <h1 className="text-4xl font-bold mb-2">Quiz Type: <span style={{ color: '#1A5319' }}>{quizType}</span></h1>
        <p className="opacity-80 mb-8">Get ready for the {quizType.replace('-', ' ')} quiz!</p>

        {/* Render the selected quiz component */}
        {QuizComponent && <QuizComponent />}
      </main>
    </div>
  );
};

export default QuizTypePage;
