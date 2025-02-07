"use client"

import { useEffect, useState } from "react"
import { fetchGeographicalFacts, type GeographicalFact } from "@/utils/geographical-api"
import Sidebar from "@/components/common/Sidebar"
import { FaInfoCircle } from "react-icons/fa"
import Space from "@/components/common/Space"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BackButton from "@/components/buttons/BackButton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "/icons/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const GeographicalFactsPage = () => {
  const [facts, setFacts] = useState<GeographicalFact[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  useEffect(() => {
    const getFacts = async () => {
      const data = await fetchGeographicalFacts()
      setFacts(data || [])
      setLoading(false)
    }

    getFacts()
  }, [])

  if (loading)
    return (
      <div className="flex min-h-screen flex-col">
        <Alert className="lg:max-w-[40%] max-w-[90%] mx-auto mt-2">
          <AlertTitle>
            <span className="font-semibold text-lg">Heads up!</span>
          </AlertTitle>
          <AlertDescription>Please note that loading may take a few seconds sometimes.</AlertDescription>
        </Alert>
        <div className="flex-1 flex justify-center items-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )

  const categories = ["All", "Exclaves", "Micronations", "Bizarre Borders", "Forgotten Cities"]

  const filteredFacts = selectedCategory === "All" ? facts : facts.filter((fact) => fact.category === selectedCategory)

  const displayedFacts = showAll ? filteredFacts : filteredFacts.slice(0, 9)

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Space height="15px" />
        <h1 className="text-4xl font-bold mb-2">
          Discover Obscure <span style={{ color: "#1A5319" }}>Geographical Facts</span>
        </h1>
        <p className="opacity-80 mb-8">
          Explore the world&apos;s most intriguing geographical oddities on our interactive map!
        </p>

        <div className="mt-4 mb-8">
          <label htmlFor="category-select" className="block mb-2 text-sm font-medium">
            Filter by Category:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8" style={{ height: "400px" }}>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {displayedFacts.map((fact) => (
              <Marker key={fact.id} position={[fact.latitude, fact.longitude]} icon={customIcon}>
                <Popup>
                  <h3 className="font-bold">{fact.title}</h3>
                  <p>{fact.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 border border-transparent mb-8">
          {displayedFacts.map((fact) => (
            <div
              key={fact.id}
              className="border border-gray-300 rounded-[0.4rem] flex flex-col p-4 bg-white hover:cursor-pointer hover:bg-black hover:bg-opacity-5 dark:bg-white dark:border-none dark:bg-opacity-5 dark:hover:bg-opacity-15"
            >
              <h3 className="font-bold text-lg mb-2">{fact.title}</h3>
              <p className="text-sm mb-4">{fact.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm text-gray-500">{fact.category}</span>
                <Link href={`/geographical-facts/${fact.id}`}>
                  <Button variant="outline" size="sm">
                    <FaInfoCircle className="mr-2" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!showAll && filteredFacts.length > 9 && (
          <Button onClick={() => setShowAll(true)} className="w-full max-w-[18rem] h-[2.8rem] text-[1.2rem]">
            Show All
          </Button>
        )}
        <Space height="40px" />
      </main>
    </div>
  )
}

export default GeographicalFactsPage

