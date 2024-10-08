"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import GreenButton from '@/components/buttons/GreenButton';
import { fetchCountries } from '@/utils/overpass-api';
import QuizBreadcrumbs from '@/components/quiz/QuizBreadCrumbs';
import Space from '@/components/common/Space';

const RegionQuizPage = () => {
  const { country, region } = useParams();
  const router = useRouter();
  const [quizType, setQuizType] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [countryName, setCountryName] = useState<string | null>(null);

  const handleQuizTypeSelect = (type: string) => {
    setQuizType(type);
  };

  const handleStartQuiz = () => {
    if (quizType) {
      router.push(`/quizzes/${country}/${region}/${quizType}`);
    }
  };

  useEffect(() => {
    const fetchCountryName = async () => {
      const countries = await fetchCountries(); 
      if (countries) {
        const foundCountry = countries.find((c) => c.iso_code === country);
        setCountryName(foundCountry ? foundCountry.name : null);
      }
    };

    fetchCountryName();
    setLoading(false);
  }, [country]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!country || !region) return <div className="flex justify-center items-center h-screen">No country or region selected.</div>;

  const decodedRegion = Array.isArray(region) ? decodeURIComponent(region[0]) : decodeURIComponent(region);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <QuizBreadcrumbs />
        <Space height="20px" />

        <h1 className="text-4xl font-bold mb-2">
          Quiz for <span style={{ color: '#1A5319' }}>{countryName || country} - {decodedRegion}</span>
        </h1>
        <p className="opacity-80 mb-8">
          Select a quiz type for {decodedRegion} in {countryName || country}.
        </p>

        <h3 className="text-xl font-semibold mt-4">Select Quiz Type</h3>
        <div className="flex flex-col gap-2 mt-2">
          {["Cities", "Towns", "Villages", "Hamlets", "All"].map((type) => (
            <button
              key={type}
              onClick={() => handleQuizTypeSelect(type)}
              className={`border border-gray-300 rounded-[0.4rem] p-4 bg-white hover:cursor-pointer hover:bg-black hover:bg-opacity-5 dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15 ${quizType === type ? 'bg-gray-200' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>

        {quizType && (
          <div className="mt-4">
            <h4 className="text-xl font-semibold my-4">
              You selected: <span className="font-bold text-[#1A5319]">{quizType}</span>
            </h4>
            <GreenButton
              title={`Start Quiz: ${decodedRegion} - ${quizType}`}
              onClick={handleStartQuiz}
              width="w-full max-w-[18rem]"
              height="h-[2.8rem] p-4"
              fontSize="text-[1.2rem]"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default RegionQuizPage;
