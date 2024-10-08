// components/SimpleMap.tsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface SimpleMapProps {
  center: [number, number]; // [latitude, longitude]
  zoom: number;
  places: Array<{ id: number; name: string; position: [number, number] }>; // Adjust based on your data structure
}

const SimpleMap: React.FC<SimpleMapProps> = ({ center, zoom, places }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map((place) => (
        <Marker key={place.id} position={place.position}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SimpleMap;
