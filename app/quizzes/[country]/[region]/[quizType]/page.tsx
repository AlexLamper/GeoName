"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchCountries, fetchPlacesByRegion, fetchRegionsByCountry } from '@/utils/overpass-api';
import Sidebar from '@/components/common/Sidebar';
import QuizBreadcrumbs from '@/components/quiz/QuizBreadCrumbs';
import Space from '@/components/common/Space';
import ClickPlaceQuiz from '@/components/quiz/mode/ClickPlaceQuiz';
import NamePlaceQuiz from '@/components/quiz/mode/NamePlaceQuiz';

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