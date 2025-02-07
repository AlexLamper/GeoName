import { fetchGeographicalFactById } from "@/utils/geographical-api"
import Sidebar from "@/components/common/Sidebar"
import BackButton from "@/components/buttons/BackButton"
import Space from "@/components/common/Space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("@/components/DynamicMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

export default async function GeographicalFactPage({ params }: { params: { id: string } }) {
  const fact = await fetchGeographicalFactById(params.id)

  if (!fact) return <div>Fact not found</div>

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:max-w-[80%] max-w-full">
        <BackButton />
        <Space height="15px" />
        <h1 className="text-4xl font-bold mb-2">
          Geographical <span style={{ color: "#1A5319" }}>Fact Details</span>
        </h1>
        <p className="opacity-80 mb-8">Explore the fascinating details of this geographical oddity!</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{fact.title}</CardTitle>
            <CardDescription>{fact.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{fact.description}</p>
            {fact.extendedDescription && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">More Information</h3>
                <p>{fact.extendedDescription}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mb-8" style={{ height: "400px" }}>
          <DynamicMap singleFact={fact} />
        </div>

        {fact.funFacts && (
          <Card>
            <CardHeader>
              <CardTitle>Fun Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {fact.funFacts.map((funFact, index) => (
                  <li key={index}>{funFact}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Space height="40px" />
      </main>
    </div>
  )
}

