import { useRouter } from 'next/router';
import { useState } from 'react';

const regions = {
  Germany: ['Bavaria', 'Saxony'],
  Japan: ['Hokkaido', 'Kyoto'],
};

const CountryQuizPage = () => {
  const router = useRouter();
  const { country } = router.query;
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{`Quiz for ${country}`}</h1>
      {!selectedRegion ? (
        <div>
          <button>Play Entire {country}</button>
          <h2>Select a Region</h2>
          {regions[country as keyof typeof regions].map((region) => (
            <button key={region} onClick={() => handleRegionSelect(region)}>
              {region}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>{`You selected: ${selectedRegion}`}</h2>
          <button>
            Start Quiz for {selectedRegion}
          </button>
        </div>
      )}
    </div>
  );
};

export default CountryQuizPage;
