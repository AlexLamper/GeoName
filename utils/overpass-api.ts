// utils/overpass-api.ts

// Step 1: Define TypeScript Interfaces for Overpass Data
interface OverpassElement {
  id: number;
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

    return data.elements.map((element: OverpassElement) => ({
      id: element.id,
      tags: {
        name: element.tags["name"],
      },
    }));
  } catch (error) {
    console.error("Error fetching regions:", error);
    return null;
  }
}
  

  
  