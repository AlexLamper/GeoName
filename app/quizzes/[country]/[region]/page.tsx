"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import GreenButton from '@/components/buttons/GreenButton';
import { fetchCountries } from '@/utils/overpass-api';
import QuizBreadcrumbs from '@/components/quiz/QuizBreadCrumbs';
import Space from '@/components/common/Space';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Ensure this import path is correct

const RegionQuizPage = () => {
    const { country, region } = useParams();
    const router = useRouter();
    const [selectedQuizTypes, setSelectedQuizTypes] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [countryName, setCountryName] = useState<string | null>(null);

    const handleQuizTypeSelect = (type: string) => {
        if (type === "All") {
            if (selectedQuizTypes.includes("All")) {
                setSelectedQuizTypes(prev => prev.filter(t => t !== "All"));
            } else {
                setSelectedQuizTypes(["All"]); // Select "All" and clear other selections
            }
        } else {
            setSelectedQuizTypes(prev => 
                prev.includes(type) 
                    ? prev.filter(t => t !== type) // Deselect if already selected
                    : prev.includes("All") 
                        ? [type] // If "All" is selected, replace with the new selection
                        : [...prev, type] // Otherwise, add to selections
            );
        }
    };

    const handleStartQuiz = () => {
        if (selectedQuizTypes.length > 0) {
            router.push(`/quizzes/${country}/${region}/${selectedQuizTypes[0]}`);
        }
    };

    useEffect(() => {
        const fetchCountryName = async () => {
            const countries = await fetchCountries(); 
            if (countries) {
                const foundCountry = countries.find((c) => c.iso_code === country);
                setCountryName(foundCountry ? foundCountry.name : null);
            }
            setLoading(false); // Ensure loading is set to false after fetching country name
        };

        fetchCountryName();
    }, [country]);

    if (!country || !region) return <div className="flex justify-center items-center h-screen">No country or region selected.</div>;

    // Decode region properly
    const decodedRegion = Array.isArray(region) ? decodeURIComponent(region[0]) : decodeURIComponent(region);

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
                <QuizBreadcrumbs />
                <Space height="20px" />

                {/* Loading Alert */}
                {loading && (
                    <Alert>
                        <AlertTitle><span className='font-semibold text-lg'>Heads up!</span></AlertTitle>
                        <AlertDescription>
                            Please note that loading may take a few seconds sometimes.
                        </AlertDescription>
                    </Alert>
                )}

                <h1 className="text-4xl font-bold mb-2">
                    Quiz for <span style={{ color: '#1A5319' }}>{countryName || country} - {decodedRegion}</span>
                </h1>
                <p className="opacity-80 mb-8">
                    Select a quiz type for {decodedRegion} in {countryName || country}.
                </p>

                <h3 className="text-xl font-semibold mt-4">Select Quiz Type</h3>
                <p className='text-xs opacity-80 mb-4'>*Multiple selection doesn&apos;t work yet.</p>
                <div className="flex flex-col gap-2 mt-2 lg:max-w-[60%] max-w-[95%]">
                    {["All", "Cities", "Towns", "Villages"].map((type) => (
                        <button
                            key={type}
                            onClick={() => handleQuizTypeSelect(type)}
                            className={`rounded-[0.5rem] p-4 transition-colors duration-200 border
                                ${selectedQuizTypes.includes(type) 
                                    ? 'bg-[#508D4E] text-white' 
                                    : 'bg-white hover:bg-gray-200'} 
                                dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15 ${selectedQuizTypes.includes(type) ? 'dark:bg-[#508D4E] dark:text-white' : ''}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {selectedQuizTypes.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold my-4">
                            You selected: <span className="font-bold text-[#1A5319]">{selectedQuizTypes.join(", ")}</span>
                        </h4>
                        <GreenButton
                            title={`Start Quiz: ${decodedRegion} - ${selectedQuizTypes.join(", ")}`}
                            onClick={handleStartQuiz}
                            width="w-full max-w-[18rem]"
                            height="h-[2.8rem] p-4"
                            fontSize="text-[1.2rem]"
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

export default RegionQuizPage;