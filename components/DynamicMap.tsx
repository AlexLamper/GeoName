"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import type { GeographicalFact } from "@/utils/geographical-api"

const customIcon = new L.Icon({
  iconUrl: "/icons/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

export default function DynamicMap({ fact }: { fact: GeographicalFact }) {
  return (
    <MapContainer center={[fact.latitude, fact.longitude]} zoom={6} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[fact.latitude, fact.longitude]} icon={customIcon}>
        <Popup>
          <h3 className="font-bold">{fact.title}</h3>
          <p>{fact.description}</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

