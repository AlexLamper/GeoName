export type ApiResponse<T> = {
    data?: T; // The main data from the API response
    error?: string; // Error message if any
  };
  
  export type LeaderboardEntry = {
    id: string;
    name: string;
    score: number;
    createdAt: Date;
    leaderboardPlacement?: number; // Optional if needed
  };
  