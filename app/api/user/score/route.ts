import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';

interface UserPublicMetadata {
  score?: number;
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
    return NextResponse.json({ id: user.id, score }); // Include the user ID for matching purposes
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
