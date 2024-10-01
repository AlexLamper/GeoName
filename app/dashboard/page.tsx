"use client";

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  if (!isSignedIn) {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
    return null;
  }

  return (
    <div className='p-4 min-h-screen'>
      <h1 className='text-2xl font-bold'>Welcome to your dashboard!</h1>
      {/* Protected content goes here */}
    </div>
  );
}
