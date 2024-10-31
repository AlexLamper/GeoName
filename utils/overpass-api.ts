import continentMapping from "@/data/continentMapping";

interface OverpassElement {
  id: number;
  lat: number;
  lon: number;
  tags: {
    name: string;
    "ISO3166-1:alpha2"?: string;
    [key: string]: string | undefined;
  };
}

export interface Country {
  id: number;
  name: string;
  iso_code: string;
  continent?: string;
}

export interface Region {
  id: number;
  tags: {
    name: string;
  };
}

export type Place = {
  id: number;
  name: string;
  position: [number, number];
  tags?: {
    name?: string;
  };
  lat: number;
  lon: number;
};
  
 // Function to fetch countries
export async function fetchCountries(): Promise<Country[] | null> {
  const query = `
    [out:json];
    relation["admin_level"="2"]["type"="boundary"]["boundary"="administrative"];
    out body;
  `;

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
  console.log('Fetching countries from URL:', url); // Log the URL

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.elements.map((element: OverpassElement) => {
      const isoCode = element.tags["ISO3166-1:alpha2"];
      return {
        id: element.id,
        name: element.tags["name:en"] || element.tags["name"] || "Unnamed", // Fallback for name
        iso_code: isoCode || "N/A",
        continent: isoCode ? continentMapping[isoCode] || "Unknown" : "Unknown",
      };
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
    return null;
  }
}

// Function to fetch regions by country
export async function fetchRegionsByCountry(country: string): Promise<Region[] | null> {
  const query = `
    [out:json][timeout:25];
    area["ISO3166-1:alpha2"="${country}"]->.searchArea;
    relation["admin_level"="4"](area.searchArea);
    out body;
  `;

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
  console.log('Fetching regions from URL:', url); // Log the URL

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.elements.length === 0) {
      console.log(`No regions found for ${country}`);
      return null; // No regions found
    }

    return data.elements.map((element: OverpassElement) => {
      const regionId = element.id; // Get the region ID
      console.log(`Region ID: ${regionId}`); // Log the region ID
      return {
        id: regionId,
        tags: {
          name: element.tags["name"] || "Unnamed", // Fallback for name
        },
      };
    });
  } catch (error) {
    console.error("Error fetching regions:", error);
    return null;
  }
}

// Function to fetch places by region
export async function fetchPlacesByRegion(
  regionId: number,
  quizType: string
): Promise<Place[] | null> {
  if (isNaN(regionId) || regionId <= 0) {
    console.error(`Invalid region ID: ${regionId}`);
    return null;
  }

  // Convert the regionId to the correct areaId by adding 360 as a prefix
  const areaId = 3600000000 + regionId;

  const placeTypesMap: Record<string, string[]> = {
    Cities: ['city'],
    Towns: ['town'],
    Villages: ['village'],
    All: ['city', 'town', 'village']
  };

  const selectedPlaceTypes = placeTypesMap[quizType] || [];
  
  const query = `
    [out:json][timeout:150];
    area(${areaId})->.regionArea;
    (
      ${selectedPlaceTypes.map(type => `node["place"="${type}"](area.regionArea);`).join('\n')}
      ${selectedPlaceTypes.map(type => `way["place"="${type}"](area.regionArea);`).join('\n')}
      ${selectedPlaceTypes.map(type => `rel["place"="${type}"](area.regionArea);`).join('\n')}
    );
    out body center;
  `;

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.elements.length === 0) {
      console.log(`No places found for region ID ${regionId} with quiz type ${quizType}`);
      return null;
    }

    return data.elements.map((element: OverpassElement) => ({
      id: element.id,
      name: element.tags.name || "Unnamed",
      position: [element.lat, element.lon] as [number, number],
      lat: element.lat,
      lon: element.lon,
      tags: element.tags,
    }));
  } catch (error) {
    console.error('Error fetching places:', error);
    return null;
  }
}
