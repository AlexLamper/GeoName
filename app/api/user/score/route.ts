import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';

interface UserPublicMetadata {
  score?: number;
  leaderboardPlacement?: number;
}

// GET endpoint to fetch the current user's score
export async function GET() {
    const { userId } = auth();
  
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  
    try {
      const user = await clerkClient.users.getUser(userId);
      const score = (user.publicMetadata as UserPublicMetadata).score || 0;
      return NextResponse.json({ id: user.id, score }); // Include the user ID
    } catch (error) {
      console.error("Error fetching score:", error);
      return NextResponse.json({ error: "Error fetching score" }, { status: 500 });
    }
  }
  

// POST endpoint to update the current user's score
export async function POST() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const currentUser = await clerkClient.users.getUser(userId);
    const currentScore = (currentUser.publicMetadata as UserPublicMetadata).score || 0;
    const newScore = currentScore + 1; // Increment by 1

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        score: newScore,
      },
    });

    return NextResponse.json({ score: newScore });
  } catch (error) {
    console.error("Error updating score:", error);
    return NextResponse.json({ error: "Error updating score" }, { status: 500 });
  }
}

// GET endpoint to fetch all users for the leaderboard
export async function GET_ALL() {
    try {
        // Fetch all users from Clerk
        const usersResponse = await clerkClient.users.getUserList({
        limit: 100, // Adjust the limit as necessary
        });

        // Extract users from the response's data property
        const users = usersResponse.data; 

        // Sort users by score in descending order
        const sortedUsers = users.sort((a, b) => {
        const scoreA = (a.publicMetadata as UserPublicMetadata).score || 0;
        const scoreB = (b.publicMetadata as UserPublicMetadata).score || 0;
        return scoreB - scoreA; // Descending order
        });

        // Map users to include their score and calculate leaderboard placement
        const userData = sortedUsers.map((user, index) => ({
        id: user.id,
        name: user.firstName || user.lastName || 'Unknown',
        score: (user.publicMetadata as UserPublicMetadata).score || 0,
        createdAt: user.createdAt,
        leaderboardPlacement: index + 1, // Assign rank based on index
        }));

        // Update each user's public metadata with their leaderboard placement
        await Promise.all(userData.map(user => {
        return clerkClient.users.updateUserMetadata(user.id, {
            publicMetadata: {
            leaderboardPlacement: user.leaderboardPlacement,
            },
        });
        }));

        return NextResponse.json(userData);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
}
