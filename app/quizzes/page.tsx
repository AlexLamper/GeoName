"use client";

import { useEffect, useState } from 'react';
import { fetchCountries, Country } from '@/utils/overpass-api';
import Sidebar from '@/components/common/Sidebar';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Space from "@/components/common/Space";
import GreenButton from '@/components/buttons/GreenButton';
import Link from 'next/link';

const QuizzesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState<string>('All');

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data || []);
      setLoading(false);
    };

    getCountries();
  }, []);

  if (loading) return <div>Loading countries...</div>;

  const continents = ['All', 'Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania'];

  const filteredCountries = selectedContinent === 'All'
    ? countries
    : countries.filter(country => country.continent === selectedContinent);

  const displayedCountries = showAll ? filteredCountries : filteredCountries.slice(0, 18);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <h1 className="text-4xl font-bold mb-2">Choose the quiz <span style={{ color: '#1A5319' }}>Country</span></h1>
        <p className="opacity-80 mb-8">
            On this page you can choose a country which you want to play the quiz of!
        </p>

        {/* Continent Filter Dropdown */}
        <div className="mt-4">
          <label htmlFor="continent-select" className="block mb-2 text-sm font-medium">Filter by Continent:</label>
          <select
            id="continent-select"
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            {continents.map(continent => (
              <option key={continent} value={continent}>{continent}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 border border-transparent mb-8">
          {displayedCountries.map((country) => (
            <Link key={country.id} href={`/quizzes/${country.iso_code}`}>
                <div key={country.id} className="border border-gray-300 rounded-[0.4rem] flex items-center p-4 bg-white hover:cursor-pointer hover:bg-black hover:bg-opacity-5 dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15">
                    <Image
                        src={`/flags/4x3/${country.iso_code.toLowerCase()}.svg`}
                        alt={`Flag of ${country.name}`}
                        className="w-12 h-8 mr-4 rounded-[0.4rem]"
                        width={120}
                        height={80}
                    />
                    <span className="flex-1 text-center font-medium text-lg">{country.name}</span>
                    <span className="text-[#508D4E]">
                        <FaArrowRight size={20} color="#508D4E" />
                    </span>
                </div>
            </Link>
          ))}
        </div>
        {/* Show All Button */}
        {!showAll && filteredCountries.length > 9 && (
            <GreenButton
              title="Show All"
              onClick={() => setShowAll(true)}
              width="w-full max-w-[18rem]"
              height="h-[2.8rem] p-4"
              fontSize="text-[1.2rem]"
            />
        )}
        <Space height="40px" />
      </main>
    </div>
  );
};

export default QuizzesPage;
