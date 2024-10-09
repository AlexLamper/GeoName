import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import config from '@/src/config/config';

const DefaultIcon = L.icon({
  iconUrl: '/icons/marker.svg',
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -42],
});

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/icons/marker.svg',
  iconUrl: '/icons/marker.svg',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

interface SimpleMapProps {
  center: [number, number];
  zoom: number;
  places: Array<{ id: number; name: string; position: [number, number] }>;
}

const QuizMap: React.FC<SimpleMapProps> = ({ center, zoom, places }) => {
  const [mapType, setMapType] = useState<string>('google-maps-like'); // Set the default map type here
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
      <div className="mb-4">
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
        center={center}
        zoom={zoom}
        style={{ height: '600px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}
        className="shadow-lg"
      >
        {getTileLayer()}
        {places.map((place) => (
          <Marker key={place.id} position={place.position} icon={DefaultIcon}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default QuizMap;
