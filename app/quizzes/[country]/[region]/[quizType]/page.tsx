"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SimpleMap from '@/components/quiz/QuizMap';
import { fetchCountries } from '@/utils/overpass-api';
import Sidebar from '@/components/common/Sidebar';
import QuizBreadcrumbs from '@/components/quiz/QuizBreadCrumbs';
import Space from '@/components/common/Space';

type Place = {
  id: number;
  name: string;
  position: [number, number];
};

const QuizTypePage = () => {
  const { country, region, quizType } = useParams();
  const [countryName, setCountryName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const places: Place[] = [
    { id: 1, name: 'City 1', position: [51.505, -0.09] as [number, number] },
    { id: 2, name: 'City 2', position: [51.51, -0.1] as [number, number] },
  ];

  useEffect(() => {
    const fetchCountryName = async () => {
      if (typeof country === 'string') {
        const countries = await fetchCountries(); 
        if (countries) {
          const foundCountry = countries.find((c) => c.iso_code === country);
          setCountryName(foundCountry ? foundCountry.name : null);
        }
      }
      setLoading(false);
    };

    fetchCountryName();
  }, [country]);

  const regionString = Array.isArray(region) ? region[0] : region;
  const decodedRegion = regionString ? decodeURIComponent(regionString) : '';

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!country) return <div className="flex justify-center items-center h-screen">No country selected.</div>;

  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
            <QuizBreadcrumbs />
            <Space height="20px" />

            <h1 className="text-4xl font-bold mb-4">
                {countryName || country} - {quizType} in {decodedRegion}
            </h1>
            <div className="w-full max-w-[80%] h-[500px] mb-6">
                <SimpleMap center={[51.505, -0.09]} zoom={10} places={places} />
            </div>
        </main>
    </div>
  );
};

export default QuizTypePage;
