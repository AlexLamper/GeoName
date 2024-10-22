"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchCountries, fetchPlacesByRegion, fetchRegionsByCountry } from '@/utils/overpass-api';
import Sidebar from '@/components/common/Sidebar';
import QuizBreadcrumbs from '@/components/quiz/QuizBreadCrumbs';
import Space from '@/components/common/Space';
import ClickPlaceQuiz from '@/components/quiz/mode/ClickPlaceQuiz';
import NamePlaceQuiz from '@/components/quiz/mode/NamePlaceQuiz';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Place = {
  id: number;
  name: string;
  position: [number, number];
  tags?: {
    name?: string;
  };
  lat: number;
  lon: number;
};

const QuizTypePage = () => {
  const { country, region, quizType } = useParams();
  const [countryName, setCountryName] = useState<string | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMode, setSelectedMode] = useState<'click' | 'name'>('click');

  useEffect(() => {
    const fetchCountryAndPlaces = async () => {
      try {
        // Fetch country name
        if (typeof country === 'string') {
          const countries = await fetchCountries();
          if (countries) {
            const foundCountry = countries.find((c) => c.iso_code === country);
            setCountryName(foundCountry ? foundCountry.name : null);
          }
        }

        // Fetch regions for the selected country
        let regionId: number | null = null;
        if (region && typeof region === 'string' && typeof country === 'string') {
          const regions = await fetchRegionsByCountry(country);
          if (regions) {
            const matchedRegion = regions.find((r) => r.tags.name.toLowerCase() === region.toLowerCase());
            if (matchedRegion) {
              regionId = matchedRegion.id; // Get the correct region ID
            }
          }
        }

        // Validate and fetch places if regionId is found
        if (regionId && typeof quizType === 'string') {
          console.log(`Fetching places for region ID: ${regionId} with quiz type: ${quizType}`);
          const fetchedPlaces = await fetchPlacesByRegion(regionId, quizType);

          if (fetchedPlaces) {
            const placesWithPositions = fetchedPlaces.map((place) => ({
              id: place.id,
              name: place.tags?.name || place.name,
              position: [place.lat, place.lon] as [number, number],
            }));

            setPlaces(placesWithPositions as Place[]);
          } else {
            console.log(`No places fetched for region ID ${regionId} and quiz type ${quizType}`);
          }
        } else {
          console.error(`Invalid region or quiz type provided: ${region} / ${quizType}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryAndPlaces();
  }, [country, region, quizType]);

  const regionString = Array.isArray(region) ? region[0] : region;
  const decodedRegion = regionString ? decodeURIComponent(regionString) : '';

  // Loading state with alert at the top of the page
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Alert className='lg:max-w-[40%] max-w-[90%] mx-auto mt-2'>
          <AlertTitle><span className='font-semibold text-lg'>Heads up!</span></AlertTitle>
          <AlertDescription>
            Please note that loading may take a few seconds sometimes.
          </AlertDescription>
        </Alert>
        <div className="flex-1 flex justify-center items-center">
        <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        </div>
      </div>
    );
  }

  if (!country) return <div className="flex justify-center items-center h-screen">No country selected.</div>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <QuizBreadcrumbs />
        <Space height="20px" />
  
        <h1 className="text-4xl font-bold mb-4">
          <span style={{ color: '#1A5319' }}>{countryName || country}</span> - {quizType} in <span style={{ color: '#1A5319' }}>{decodedRegion}</span>
        </h1>
        
        {/* Quiz Mode Switch */}
        <div className="mb-4 flex items-center">
          <span className="mr-2">Select Quiz Mode:</span>
          <label htmlFor="quiz-mode-toggle" className="relative inline-block w-14 h-8 hover:cursor-pointer">
            <input
              type="checkbox"
              id="quiz-mode-toggle"
              checked={selectedMode === 'name'}
              onChange={() => setSelectedMode(selectedMode === 'click' ? 'name' : 'click')}
              className="sr-only"
            />
            <div
              className={`block w-full h-full rounded-full ${
                selectedMode === 'name' ? 'bg-blue-500' : 'bg-gray-300'
              } transition-colors duration-300`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                selectedMode === 'name' ? 'translate-x-6' : ''
              }`}
            ></div>
          </label>
          <span className="ml-2 text-gray-600">
            {selectedMode === 'name' ? 'Name Place Quiz' : 'Click Place Quiz'}
          </span>
        </div>

        {selectedMode === 'click' ? (
          <ClickPlaceQuiz places={places} />
        ) : (
          <NamePlaceQuiz places={places} />
        )}
      </main>
    </div>
  );
};

export default QuizTypePage;
