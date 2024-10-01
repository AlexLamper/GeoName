'use client';

import Seperator from "@/components/common/Seperator";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import More from "@/components/home/More";

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  if (isSignedIn) {
    return null;
  }

  return (
    <div>
      <Hero />
      <About />
      <Seperator />
      <Features />
      <Seperator />
      <More />
    </div>
  );
}

