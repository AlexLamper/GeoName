"use client";

import { useParams, useRouter } from 'next/navigation'; // Import useRouter
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import GreenButton from '@/components/buttons/GreenButton';
import { fetchCountries, fetchRegionsByCountry } from '@/utils/overpass-api';
import { FaArrowRight } from 'react-icons/fa';

const CountryQuizPage = () => {
  const { country } = useParams();
  const router = useRouter(); // Initialize router
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [regions, setRegions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [countryName, setCountryName] = useState<string | null>(null); // State for full country name

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  useEffect(() => {
    const fetchRegions = async () => {
      setLoading(true);

      if (typeof country === 'string') {
        try {
          const regionData = await fetchRegionsByCountry(country);
          if (regionData) {
            const regionNames = regionData.map((region) => region.tags.name);
            setRegions(regionNames);
            console.log("Fetched regions:", regionNames);
          } else {
            console.log("No regions data received.");
          }
        } catch (error) {
          console.error("Error fetching regions:", error);
        }
      } else {
        console.error("Country parameter is not a valid string.");
      }

      setLoading(false);
    };

    // Fetch country name based on ISO code (country)
    const fetchCountryName = async () => {
      const countries = await fetchCountries(); // Adjust this function to fetch all countries
      if (countries) {
        const foundCountry = countries.find((c) => c.iso_code === country);
        setCountryName(foundCountry ? foundCountry.name : null);
      }
    };

    fetchRegions();
    fetchCountryName(); // Call function to fetch country name
  }, [country]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (!country) return <div className="flex justify-center items-center h-screen">No country selected.</div>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        {/* Back button */}
        <button onClick={() => router.back()} className="mb-4 text-blue-500">
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-2">
          Quiz for <span style={{ color: '#1A5319' }}>{countryName || country}</span>
        </h1>
        <p className="opacity-80 mb-8">
          Select a region or play a quiz for the entire {countryName || country}.
        </p>
        
        {!selectedRegion ? (
          <div>
            {/* Button to play entire country quiz */}
            <GreenButton
              title={`Play Entire ${countryName || country}`}
              onClick={() => handleRegionSelect('Entire Country')}
              width="w-full max-w-[18rem]"
              height="h-[2.8rem] p-4"
              fontSize="text-[1.2rem]"
            />

            <h2 className="text-2xl font-semibold mt-6 mb-4">Select a Region</h2>

            {regions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => handleRegionSelect(region)}
                    className="border border-gray-300 rounded-[0.4rem] flex items-center p-4 bg-white hover:cursor-pointer hover:bg-black hover:bg-opacity-5 dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15"
                  >
                    <span className="flex-1 text-center font-medium text-lg">{region}</span>
                    <span className="text-[#508D4E]">
                      <FaArrowRight size={20} color="#508D4E" />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="opacity-80">No regions available for this country.</div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4">{`You selected: ${selectedRegion}`}</h2>
            <GreenButton
              title={`Start Quiz for ${selectedRegion}`}
              onClick={() => console.log('Starting quiz for', selectedRegion)}
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

export default CountryQuizPage;