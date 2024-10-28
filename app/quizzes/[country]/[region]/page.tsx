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

    // Ensure region is consistently formatted
    const handleStartQuiz = () => {
        if (selectedQuizTypes.length > 0) {
            const regionValue = Array.isArray(region) ? region[0] : region;
            const encodedRegion = encodeURIComponent(decodeURIComponent(regionValue)).toLowerCase(); // Convert to lowercase
            router.push(`/quizzes/${country}/${encodedRegion}/${selectedQuizTypes[0]}`);
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

    // Decode region properly for display
    const decodedRegion = Array.isArray(region) ? decodeURIComponent(region[0]) : decodeURIComponent(region);

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
                <QuizBreadcrumbs />
                <Space height="20px" />

                {/* Loading Alert */}
                {loading && (
                    <div className="flex min-h-screen flex-col">
                        <Alert className='lg:max-w-[40%] max-w-[90%] mx-auto mt-2'>
                        <AlertTitle><span className='font-semibold text-lg'>Heads up!</span></AlertTitle>
                        <AlertDescription>
                            Please note that loading may take a few seconds sometimes.
                        </AlertDescription>
                        </Alert>
                        <div className="flex-1 flex justify-center items-center">
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                    </div>
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
