"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/common/Sidebar';
import Space from "@/components/common/Space";
import FlagBreadcrumbs from '@/components/flags/FlagBreadCrumbs';

const QuizPage = () => {
  const router = useRouter();
  const { quiz } = useParams<{ quiz: string }>(); // Get the selected quiz category from the URL

  const quizTypes = [
    { label: 'Four Flags', value: 'four-flags' },
    { label: 'Four Names', value: 'four-names' },
    { label: 'Six Flags', value: 'six-flags' },
    { label: 'Six Names', value: 'six-names' },
  ];

  const handleQuizTypeSelection = (quizType: string) => {
    // Redirect to the quiz page with the selected quiz type
    router.push(`/flags/${quiz}/${quizType}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <FlagBreadcrumbs />
        <Space height="20px" />

        <h1 className="text-4xl font-bold mb-2">Choose Your <span style={{ color: '#1A5319' }}>Quiz Type</span></h1>
        <p className="opacity-80 mb-8">Select a quiz type to get started!</p>

        {/* Quiz Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-4 border border-transparent mb-8">
          {quizTypes.map((quiz) => (
            <div
              key={quiz.value}
              className="border border-gray-300 rounded-[0.4rem] flex flex-col items-center p-4 bg-white hover:cursor-pointer hover:bg-black hover:bg-opacity-5 dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15 transition duration-200"
              onClick={() => handleQuizTypeSelection(quiz.value)}
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

export default QuizPage;
