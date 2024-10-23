import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

interface UserPublicMetadata {
  score?: number;
  leaderboardPlacement?: number; 
}

// GET endpoint to fetch all users
export async function GET() {
  try {
    // Fetch all users from Clerk
    const usersResponse = await clerkClient.users.getUserList({
      limit: 100, // Adjust the limit as necessary
    });

    // Extract users from the response's data property
    const users = usersResponse.data; 

    // Sort users by score in descending order and calculate leaderboard placements
    const sortedUsers = users.sort((a, b) => {
      const scoreA = (a.publicMetadata as UserPublicMetadata).score || 0;
      const scoreB = (b.publicMetadata as UserPublicMetadata).score || 0;
      return scoreB - scoreA; // Descending order
    });

    // Map users to include their score and leaderboard placement
    const userData = sortedUsers.map((user, index) => ({
      id: user.id,
      name: user.firstName || user.lastName || 'Unknown',
      score: (user.publicMetadata as UserPublicMetadata).score || 0,
      createdAt: user.createdAt,
      leaderboardPlacement: index + 1, // Assign rank based on index
    }));

    return NextResponse.json(userData); // Return the user data
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
