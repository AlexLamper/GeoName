"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import QuizMap from '@/components/quiz/QuizMap';
import { fetchCountries, fetchPlacesByRegion, fetchRegionsByCountry} from '@/utils/overpass-api';
import Sidebar from '@/components/common/Sidebar';
import QuizBreadcrumbs from '@/components/quiz/QuizBreadCrumbs';
import Space from '@/components/common/Space';

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
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(10);

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
        if (regionId) {
          console.log(`Fetching places for region ID: ${regionId}`); // Debugging output
          const fetchedPlaces = await fetchPlacesByRegion(regionId);
          
          if (fetchedPlaces) {
            const placesWithPositions = fetchedPlaces.map((place) => ({
              id: place.id,
              name: place.tags?.name || place.name, // Use tags if available, fallback to name
              position: [place.lat, place.lon] as [number, number], // Ensure it's a tuple
            }));
  
            console.log('Fetched Places:', placesWithPositions); // Log the fetched places
            setPlaces(placesWithPositions as Place[]);
  
            // Calculate the center point of the region based on the places
            if (placesWithPositions.length > 0) {
              const latitudes = placesWithPositions.map((p) => p.position[0]);
              const longitudes = placesWithPositions.map((p) => p.position[1]);
              const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
              const avgLon = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;
              setMapCenter([avgLat, avgLon]);
              setMapZoom(8); // Adjust this value as needed based on your UI design
            }
          } else {
            console.log(`No places fetched for region ID ${regionId}`);
          }
        } else {
          console.error(`Invalid region provided: ${region}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCountryAndPlaces();
  }, [country, region]);    

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
          {mapCenter && places.length > 0 ? (
            <QuizMap center={mapCenter} zoom={mapZoom} places={places} />
          ) : (
            <div>No places available for the selected region.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default QuizTypePage;
