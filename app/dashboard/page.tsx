"use client";

import Sidebar from '@/components/common/Sidebar';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import MainDashboard from '@/components/dashboard/MainDashboard';

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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      <MainDashboard />
    </div>
  );
}
