import { fetchGeographicalFacts } from "@/utils/geographical-api"
import Sidebar from "@/components/common/Sidebar"
import { FaInfoCircle } from "react-icons/fa"
import Space from "@/components/common/Space"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BackButton from "@/components/buttons/BackButton"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("@/components/DynamicMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

export default async function GeographicalFactsPage() {
  const facts = await fetchGeographicalFacts()

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

        <div className="mb-8" style={{ height: "400px" }}>
          <DynamicMap facts={facts} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 border border-transparent mb-8">
          {facts.map((fact) => (
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

        <Space height="40px" />
      </main>
    </div>
  )
}

