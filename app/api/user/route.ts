import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

interface UserPublicMetadata {
  score?: number;
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

    // Map users to include their score from publicMetadata
    const userData = users.map(user => ({
      id: user.id,
      name: user.firstName || user.lastName || 'Unknown',
      score: (user.publicMetadata as UserPublicMetadata).score || 0,
      createdAt: user.createdAt,
    }));

    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
  }
}
