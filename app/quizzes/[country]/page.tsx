"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import { fetchRegionsByCountry } from '@/utils/overpass-api';

const CountryQuizPage = () => {
  const { country } = useParams();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [regions, setRegions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  useEffect(() => {
    const fetchRegions = async () => {
      setLoading(true);
      
      if (typeof country === 'string') {
        const regionData = await fetchRegionsByCountry(country);
        if (regionData) {
          const regionNames = regionData.map((region) => region.tags.name);
          setRegions(regionNames);
        }
      } else {
        console.error("Country parameter is not a valid string.");
      }
      
      setLoading(false);
    };

    fetchRegions();
  }, [country]);

  if (loading) return <div>Loading...</div>;
  if (!country) return <div>No country selected.</div>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <h1 className="text-2xl font-bold">{`Quiz for ${country}`}</h1>
        {!selectedRegion ? (
          <div>
            <button>Play Entire {country}</button>
            <h2>Select a Region</h2>
            {regions.length > 0 ? (
              regions.map((region) => (
                <button key={region} onClick={() => handleRegionSelect(region)}>
                  {region}
                </button>
              ))
            ) : (
              <div>No regions available for this country.</div>
            )}
          </div>
        ) : (
          <div>
            <h2>{`You selected: ${selectedRegion}`}</h2>
            <button>
              Start Quiz for {selectedRegion}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CountryQuizPage;
