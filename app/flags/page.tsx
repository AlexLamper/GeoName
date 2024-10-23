"use client";

import { useRouter } from 'next/navigation';
import Sidebar from '@/components/common/Sidebar';
import Space from "@/components/common/Space";
import BackButton from '@/components/buttons/BackButton';

const FlagsPage = () => {
  const router = useRouter();

  const handleQuizSelection = (quiz: string) => {
    // Redirect to the QuizPage with the selected quiz type
    router.push(`/flags/${quiz}`);
  };

  const quizCategories = [
    { label: 'All Flags', value: 'all' },
    { label: 'European Flags', value: 'europe' },
    // Add more categories here as needed
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Space height='15px' />
        <h1 className="text-4xl font-bold mb-2">Choose the <span style={{ color: '#1A5319' }}>Quiz</span></h1>
        <p className="opacity-80 mb-8">
          On this page, you can choose a quiz you would like to play!
        </p>

        {/* Quiz Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-4 border border-transparent mb-8">
          {quizCategories.map((quiz) => (
            <div
              key={quiz.value}
              className="border border-gray-300 rounded-[0.4rem] flex flex-col items-center p-4 bg-white hover:cursor-pointer hover:bg-black hover:bg-opacity-5 dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15 transition duration-200"
              onClick={() => handleQuizSelection(quiz.value)}
            >
              <h2 className="text-xl font-semibold text-center">{quiz.label}</h2>
              <p className="opacity-70 text-center">Start a quiz on {quiz.label.toLowerCase()}!</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FlagsPage;
