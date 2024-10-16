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

  const continentMapping: Record<string, string> = {
    "AF": "Africa",
    "AL": "Europe",
    "DZ": "Africa",
    "AS": "Oceania",
    "AD": "Europe",
    "AO": "Africa",
    "AG": "North America",
    "AR": "South America",
    "AM": "Asia",
    "AU": "Oceania",
    "AT": "Europe",
    "AZ": "Asia",
    "BS": "North America",
    "BH": "Asia",
    "BD": "Asia",
    "BB": "North America",
    "BY": "Europe",
    "BE": "Europe",
    "BZ": "North America",
    "BJ": "Africa",
    "BT": "Asia",
    "BO": "South America",
    "BA": "Europe",
    "BW": "Africa",
    "BR": "South America",
    "BN": "Asia",
    "BG": "Europe",
    "BF": "Africa",
    "BI": "Africa",
    "KH": "Asia",
    "CM": "Africa",
    "CA": "North America",
    "CV": "Africa",
    "CF": "Africa",
    "TD": "Africa",
    "CL": "South America",
    "CN": "Asia",
    "CO": "South America",
    "KM": "Africa",
    "CD": "Africa",
    "CG": "Africa",
    "CR": "North America",
    "HR": "Europe",
    "CU": "North America",
    "CY": "Europe",
    "CZ": "Europe",
    "DK": "Europe",
    "DJ": "Africa",
    "DM": "North America",
    "DO": "North America",
    "EC": "South America",
    "EG": "Africa",
    "SV": "North America",
    "GQ": "Africa",
    "ER": "Africa",
    "EE": "Europe",
    "SZ": "Africa",
    "ET": "Africa",
    "FJ": "Oceania",
    "FI": "Europe",
    "FR": "Europe",
    "GA": "Africa",
    "GM": "Africa",
    "GE": "Asia",
    "DE": "Europe",
    "GH": "Africa",
    "GR": "Europe",
    "GT": "North America",
    "GN": "Africa",
    "GW": "Africa",
    "GY": "South America",
    "HT": "North America",
    "HN": "North America",
    "HU": "Europe",
    "IS": "Europe",
    "IN": "Asia",
    "ID": "Asia",
    "IR": "Asia",
    "IQ": "Asia",
    "IE": "Europe",
    "IL": "Asia",
    "IT": "Europe",
    "JM": "North America",
    "JP": "Asia",
    "KE": "Africa",
    "KI": "Oceania",
    "KR": "Asia",
    "KW": "Asia",
    "KG": "Asia",
    "LA": "Asia",
    "LV": "Europe",
    "LB": "Asia",
    "LS": "Africa",
    "LR": "Africa",
    "LY": "Africa",
    "LT": "Europe",
    "LU": "Europe",
    "MG": "Africa",
    "MW": "Africa",
    "MY": "Asia",
    "MV": "Asia",
    "ML": "Africa",
    "MT": "Europe",
    "MH": "Oceania",
    "MR": "Africa",
    "MU": "Africa",
    "MX": "North America",
    "FM": "Oceania",
    "MD": "Europe",
    "MC": "Europe",
    "MN": "Asia",
    "ME": "Europe",
    "MA": "Africa",
    "MZ": "Africa",
    "MM": "Asia",
    "NA": "Africa",
    "NR": "Oceania",
    "NP": "Asia",
    "NL": "Europe",
    "NZ": "Oceania",
    "NI": "North America",
    "NE": "Africa",
    "NG": "Africa",
    "NO": "Europe",
    "OM": "Asia",
    "PK": "Asia",
    "PA": "North America",
    "PG": "Oceania",
    "PY": "South America",
    "PE": "South America",
    "PH": "Asia",
    "PL": "Europe",
    "PT": "Europe",
    "QA": "Asia",
    "RE": "Africa",
    "RO": "Europe",
    "RU": "Europe",
    "RW": "Africa",
    "KN": "North America",
    "LC": "North America",
    "VC": "North America",
    "WS": "Oceania",
    "SM": "Europe",
    "ST": "Africa",
    "SA": "Asia",
    "SN": "Africa",
    "RS": "Europe",
    "SC": "Africa",
    "SL": "Africa",
    "SG": "Asia",
    "SK": "Europe",
    "SI": "Europe",
    "SB": "Oceania",
    "SO": "Africa",
    "ZA": "Africa",
    "SS": "Africa",
    "ES": "Europe",
    "LK": "Asia",
    "SD": "Africa",
    "SR": "South America",
    "SE": "Europe",
    "CH": "Europe",
    "TJ": "Asia",
    "TH": "Asia",
    "TZ": "Africa",
    "TG": "Africa",
    "TO": "Oceania",
    "TT": "North America",
    "TN": "Africa",
    "TR": "Asia",
    "TM": "Asia",
    "TV": "Oceania",
    "UG": "Africa",
    "UA": "Europe",
    "AE": "Asia",
    "GB": "Europe",
    "US": "North America",
    "UY": "South America",
    "UZ": "Asia",
    "VU": "Oceania",
    "VE": "South America",
    "VN": "Asia",
    "YE": "Asia",
    "ZM": "Africa",
    "ZW": "Africa",
  };

  
  // Function to fetch countries
export async function fetchCountries(): Promise<Country[] | null> {
  const query = `
    [out:json];
    relation["admin_level"="2"]["type"="boundary"]["boundary"="administrative"];
    out body;
  `;

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

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
        name: element.tags["name:en"] || element.tags["name"],
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

    // Log each region ID while mapping
    return data.elements.map((element: OverpassElement) => {
      const regionId = element.id; // Get the region ID
      console.log(`Region ID: ${regionId}`); // Log the region ID
      return {
        id: regionId,
        tags: {
          name: element.tags["name"],
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

  // Map quizType to Overpass place types
  const placeTypesMap: Record<string, string[]> = {
    Cities: ['city'],
    Towns: ['town'],
    Villages: ['village'],
    All: ['city', 'town', 'village']
  };

  // Get the specific types of places to query based on the user's selection
  const selectedPlaceTypes = placeTypesMap[quizType] || [];

  // Log the selected quiz type and corresponding place types
  console.log(`Selected quiz type: ${quizType}`);
  console.log(`Mapped place types for this quiz: ${selectedPlaceTypes.join(', ')}`);

  // Construct the Overpass API query dynamically based on selected place types
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

  // Log the generated query for debugging purposes
  console.log('Generated Overpass API query:', query);

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched Places Data:', data);

    if (data.elements.length === 0) {
      console.log(`No places found for region ID ${regionId} with quiz type ${quizType}`);
      return null;
    }

    // Log the number of places found
    console.log(`Number of places found for quiz type ${quizType}: ${data.elements.length}`);

    return data.elements.map((element: OverpassElement) => ({
      id: element.id,
      name: element.tags.name,
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
