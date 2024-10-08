import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import StyledButton from '../buttons/StyledButton';

interface SimpleMapProps {
  center: [number, number];
  zoom: number;
  places: Array<{ id: number; name: string; position: [number, number] }>;
}

const QuizMap: React.FC<SimpleMapProps> = ({ center, zoom, places }) => {
  const [mapType, setMapType] = useState<'google' | 'osm'>('google');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true only when the component is mounted on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null or a simple loading indicator if running on the server
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-4">
        <StyledButton onClick={() => setMapType(mapType === 'google' ? 'osm' : 'google')}>
          Switch to {mapType === 'google' ? 'OpenStreetMap' : 'Google Maps'}
        </StyledButton>
        <StyledButton onClick={() => {
          // Placeholder for the future functionality
        }}>
          Change Quiz Type
        </StyledButton>
      </div>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '600px', width: '100%' }}
        className="rounded-[0.6rem] shadow-lg"
      >
        {mapType === 'google' ? (
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
            attribution='&copy; <a href="https://maps.google.com/">Google Maps</a>'
          />
        ) : (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        )}
        {places.map((place) => (
          <Marker key={place.id} position={place.position}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default QuizMap;