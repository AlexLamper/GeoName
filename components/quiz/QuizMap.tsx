import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import config from '@/src/config/config';

// Define the default map center as a fallback
const DEFAULT_CENTER: [number, number] = [51.1657, 10.4515]; // Example: Centered on Germany
const DEFAULT_ZOOM = 5;

// Define the red dot icon for markers
const RedDotIcon = L.divIcon({
  className: 'custom-red-dot',
  html: '<div style="background-color: red; width: 20px; height: 20px; border-radius: 50%; border: 1px solid white;"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10], // Center the red dot over the exact point
});

interface SimpleMapProps {
  center: [number, number];
  zoom: number;
  places: Array<{ id: number; name: string; position: [number, number] }>;
  onMarkerClick?: (placeId: number) => void;
}

const QuizMap: React.FC<SimpleMapProps> = ({ center, zoom, places, onMarkerClick }) => {
  const [mapType, setMapType] = useState<string>('google-maps-like');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ensure the component is rendered only on the client-side
  if (!isClient) {
    return null;
  }

  // Validate the center and provide a fallback if necessary
  const isValidLatLng = (coords: [number, number]) => {
    return (
      Array.isArray(coords) &&
      coords.length === 2 &&
      typeof coords[0] === 'number' &&
      typeof coords[1] === 'number' &&
      !isNaN(coords[0]) &&
      !isNaN(coords[1])
    );
  };

  const safeCenter = isValidLatLng(center) ? center : DEFAULT_CENTER;
  const safeZoom = !isNaN(zoom) && zoom > 0 ? zoom : DEFAULT_ZOOM;

  // Filter out places with invalid positions
  const validPlaces = places.filter((place) =>
    isValidLatLng(place.position)
  );

  // Function to get the appropriate TileLayer based on the selected map type
  const getTileLayer = () => {
    switch (mapType) {
      case 'jawg-dark':
        return (
          <TileLayer
            url={`https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=${config.jawgAccessToken}`}
            attribution='&copy; <a href="https://www.jawg.io/">Jawg</a>'
          />
        );
      case 'jawg-light':
        return (
          <TileLayer
            url={`https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}.png?access-token=${config.jawgAccessToken}`}
            attribution='&copy; <a href="https://www.jawg.io/">Jawg</a>'
          />
        );
      case 'jawg-lagoon':
        return (
          <TileLayer
            url={`https://{s}.tile.jawg.io/jawg-lagoon/{z}/{x}/{y}.png?access-token=${config.jawgAccessToken}`}
            attribution='&copy; <a href="https://www.jawg.io/">Jawg</a>'
          />
        );
      case 'thunderforest-spinal':
        return (
          <TileLayer
            url={`https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${config.thunderforestApiKey}`}
            attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
          />
        );
      case 'stadia-satellite':
        return (
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          />
        );
      case 'google-maps-like':
        return (
          <TileLayer
            url="http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
          />
        );
      case 'geoguessr':
        return (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
        );
      default:
        return (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
        );
    }
  };

  return (
    <div className="w-full">
      <div className="mt-6 mb-1">
        <select
          value={mapType}
          onChange={(e) => setMapType(e.target.value)}
          className="border rounded p-2"
        >
          <option value="google-maps-like">Default</option>
          <option value="geoguessr">Open Street Map</option>
          <option value="stadia-satellite">Stadia Alidade Satellite</option>
          <option value="thunderforest-spinal">Thunderforest Spinal Map</option>
          <option value="jawg-dark">Jawg Dark</option>
          <option value="jawg-light">Jawg Light</option>
          <option value="jawg-lagoon">Jawg Lagoon</option>
        </select>
      </div>
      <MapContainer
        center={safeCenter}
        zoom={safeZoom}
        style={{ height: '600px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}
        className="shadow-lg"
      >
        {getTileLayer()}
        {validPlaces.map((place) => (
          <Marker
            key={place.id}
            position={place.position}
            icon={RedDotIcon}
            eventHandlers={{
              click: () => onMarkerClick && onMarkerClick(place.id),
            }}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default QuizMap;