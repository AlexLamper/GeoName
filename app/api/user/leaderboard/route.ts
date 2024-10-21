import { NextResponse } from 'next/server';
import { clerkClient, User } from '@clerk/nextjs/server';

interface UserPublicMetadata {
  score?: number;
  leaderboardPlacement?: number;
}

// GET endpoint to fetch all users for the leaderboard
export async function GET() {
  try {
    // Fetch all users from Clerk
    const usersResponse = await clerkClient.users.getUserList({
      limit: 100, // Adjust the limit as necessary
    });

    // Extract users from the response's data property (if paginated)
    const users: User[] = usersResponse.data;

    // Sort users by score in descending order
    const sortedUsers = users.sort((a: User, b: User) => {
      const scoreA = (a.publicMetadata as UserPublicMetadata).score || 0;
      const scoreB = (b.publicMetadata as UserPublicMetadata).score || 0;
      return scoreB - scoreA; // Descending order
    });

    // Map users to include their score and calculate leaderboard placement
    const userData = sortedUsers.map((user: User, index: number) => ({
      id: user.id,
      name: user.firstName || user.lastName || 'Unknown',
      score: (user.publicMetadata as UserPublicMetadata).score || 0,
      createdAt: user.createdAt,
      leaderboardPlacement: index + 1, // Assign rank based on index
    }));

    // Update each user's public metadata with their leaderboard placement
    await Promise.all(
      userData.map((user) => {
        return clerkClient.users.updateUserMetadata(user.id, {
          publicMetadata: {
            leaderboardPlacement: user.leaderboardPlacement,
          },
        });
      })
    );

    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
  }
}
