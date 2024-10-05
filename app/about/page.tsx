"use client";

import FeaturesOverview from '@/components/about/Features';
import HowItWorks from '@/components/about/How';
import Introduction from '@/components/about/Introduction';
import Mission from '@/components/about/Mission';
import Sidebar from '@/components/common/Sidebar';
import Space from '@/components/common/Space';
import { useAuth } from '@clerk/nextjs';

const AboutPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex min-h-screen">
      {isSignedIn && <Sidebar />}
      <div>
        <Introduction />
        <Mission />
        <FeaturesOverview />
        <HowItWorks />
        <Space height="40px" />
      </div>
    </div>
  );
};

export default AboutPage;
