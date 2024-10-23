import React, { useState } from 'react';
import Statistics from '@/components/dashboard/Statistics';
import Leaderboard from './Leaderboard';

const ParentComponent = () => {
  const [refreshKey, setRefreshKey] = useState(0); // State to force re-fetch on score update

  const handleUpdateScore = () => {
    // Increment the refresh key to trigger re-fetching leaderboard data
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <Statistics onUpdateScore={handleUpdateScore} />
      <Leaderboard key={refreshKey} /> {/* Key changes trigger a re-render */}
    </div>
  );
};

export default ParentComponent;
