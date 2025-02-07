export interface GeographicalFact {
    id: string
    title: string
    description: string
    category: string
    latitude: number
    longitude: number
    extendedDescription?: string
    funFacts?: string[]
  }
  
  export async function fetchGeographicalFacts(): Promise<GeographicalFact[]> {
    // This would be an API call in a real application
    return geographicalFacts
  }
  
  export async function fetchGeographicalFactById(id: string): Promise<GeographicalFact | null> {
    // This would be an API call in a real application
    return geographicalFacts.find((fact) => fact.id === id) || null
  }
  
  const geographicalFacts: GeographicalFact[] = [
    {
      id: "1",
      title: "Baarle-Hertog/Baarle-Nassau",
      description: "A Belgian town inside the Netherlands with Dutch enclaves inside it.",
      category: "Exclaves",
      latitude: 51.4411,
      longitude: 4.9321,
      extendedDescription:
        "Baarle-Hertog is a Belgian municipality that consists of 22 exclaves in the Netherlands. These exclaves are in turn surrounded by the Dutch municipality of Baarle-Nassau, creating a complex border situation.",
      funFacts: [
        "Some houses are divided by the border, with different laws applying in different rooms.",
        "The border is marked by white crosses on the ground throughout the town.",
        "Residents can choose which country's services they want to use, such as healthcare or education.",
      ],
    },
    {
      id: "2",
      title: "Sealand",
      description: "A micronation on an abandoned sea fort off the coast of Suffolk, England.",
      category: "Micronations",
      latitude: 51.8833,
      longitude: 1.4833,
      extendedDescription:
        "Sealand is a self-proclaimed micronation located on HM Fort Roughs, a former British sea fort in the North Sea. It was seized by Roy Bates in 1967, who declared it a sovereign state.",
      funFacts: [
        "Sealand has its own currency, passports, and stamps.",
        "It has survived a coup attempt and a fire.",
        "The micronation has hosted internet servers and was once considered as a potential data haven.",
      ],
    },
    {
      id: "3",
      title: "Bir Tawil",
      description: "An area between Egypt and Sudan claimed by neither country.",
      category: "Bizarre Borders",
      latitude: 21.8667,
      longitude: 33.75,
      extendedDescription:
        "Bir Tawil is a 2,060 square kilometer uninhabited area claimed by neither Egypt nor Sudan.  The discrepancy arises from differing border demarcations.",
      funFacts: [
        "It's considered a 'terra nullius', meaning 'nobody's land'.",
        "It's been claimed by individuals and groups, but no claim has been internationally recognized.",
        "Its lack of inhabitants and resources makes it of little practical value.",
      ],
    },
    {
      id: "4",
      title: "Cooch Behar Enclaves",
      description: "A complex series of enclaves between India and Bangladesh.",
      category: "Exclaves",
      latitude: 26.3333,
      longitude: 89.45,
      extendedDescription:
        "The Cooch Behar enclaves were a complex set of 111 Indian enclaves within Bangladesh and 51 Bangladeshi enclaves within India.  A land swap resolved this in 2015.",
      funFacts: [
        "The enclaves were a result of centuries of territorial disputes and treaties.",
        "Residents often had to cross multiple borders to reach their own country's administrative centers.",
        "The land swap involved the exchange of over 162 enclaves.",
      ],
    },
    {
      id: "5",
      title: "Liberland",
      description: "A self-proclaimed micronation between Croatia and Serbia.",
      category: "Micronations",
      latitude: 45.7667,
      longitude: 18.8667,
      extendedDescription:
        "Liberland is a self-declared micronation located on a disputed area of land along the Danube River. It claims to be based on libertarian principles.",
      funFacts: [
        "It has its own constitution and flag.",
        "It has attracted citizens from around the world, though its sovereignty is not recognized.",
        "Its existence is largely symbolic.",
      ],
    },
    {
      id: "6",
      title: "Point Roberts",
      description: "A U.S. exclave south of Vancouver, Canada.",
      category: "Exclaves",
      latitude: 48.9883,
      longitude: -123.0657,
      extendedDescription:
        "Point Roberts is a census-designated place in Whatcom County, Washington, accessible only by road through Canada.",
      funFacts: [
        "Residents often shop in Canada due to its proximity and lower prices.",
        "It's geographically isolated from the rest of the United States.",
        "It has a unique community identity shaped by its location.",
      ],
    },
    {
      id: "7",
      title: "Vennbahn Railway",
      description: "A railway that creates German exclaves in Belgium.",
      category: "Bizarre Borders",
      latitude: 50.6167,
      longitude: 6.1333,
      extendedDescription:
        "The Vennbahn railway line, now a walking and cycling path, creates several German exclaves within Belgium.",
      funFacts: [
        "It was built in the late 19th century to connect Germany and Luxembourg.",
        "The exclaves are small and mostly uninhabited.",
        "The path is a popular tourist attraction.",
      ],
    },
    {
      id: "8",
      title: "Chełm",
      description: "A Polish city that was briefly an independent republic in 1918.",
      category: "Forgotten Cities",
      latitude: 51.1333,
      longitude: 23.4667,
      extendedDescription: "Chełm briefly declared independence in 1918 during the chaos following World War I.",
      funFacts: [
        "Its independence was short-lived, lasting only a few months.",
        "It's now a significant city in eastern Poland.",
        "Its history reflects the turbulent times of the region.",
      ],
    },
    {
      id: "9",
      title: "Neutral Moresnet",
      description: "A former neutral territory between Belgium and Prussia.",
      category: "Forgotten Cities",
      latitude: 50.7167,
      longitude: 6.0167,
      extendedDescription:
        "Neutral Moresnet was a small, neutral territory between Belgium and Prussia from 1816 to 1920. It was known for its zinc mines.",
      funFacts: [
        "It was governed by a joint commission from Belgium and Prussia.",
        "It had its own unique postal system and currency.",
        "Its status as a neutral territory was unusual for the time.",
      ],
    },
    {
      id: "10",
      title: "Dahala Khagrabari",
      description: "The world's only counter-counter-enclave (now resolved).",
      category: "Exclaves",
      latitude: 26.1342,
      longitude: 88.7615,
      extendedDescription:
        "Dahala Khagrabari was a counter-counter-enclave, an Indian enclave within a Bangladeshi enclave within an Indian enclave within Bangladesh.  It was resolved through a land swap.",
      funFacts: [
        "Its existence was a complex geographical anomaly.",
        "It was a source of confusion and administrative difficulties.",
        "Its resolution was a significant diplomatic achievement.",
      ],
    },
    {
      id: "11",
      title: "Transnistria",
      description: "A self-proclaimed state between Moldova and Ukraine.",
      category: "Micronations",
      latitude: 47.2167,
      longitude: 29.4667,
      extendedDescription:
        "Transnistria is a self-proclaimed state that is internationally recognized as part of Moldova, but operates independently.",
      funFacts: [
        "It has its own currency, army, and government.",
        "Its independence is not recognized by most countries.",
        "It's a region of ongoing political tension.",
      ],
    },
    {
      id: "12",
      title: "Diomede Islands",
      description:
        "Two islands in the Bering Strait, one Russian, one American, separated by the International Date Line.",
      category: "Bizarre Borders",
      latitude: 65.7833,
      longitude: -168.95,
      extendedDescription:
        "The Diomede Islands are separated by the International Date Line, meaning that one island is a day ahead of the other.",
      funFacts: [
        "Little Diomede (US) is a day behind Big Diomede (Russia).",
        "The islands are only 3.8 km apart.",
        "They represent a unique example of the International Date Line's impact on daily life.",
      ],
    },
  ]
  
  