"use client"

import { useEffect, useState } from "react"
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

export default function DynamicMap({
  facts,
  singleFact,
}: { facts?: GeographicalFact[]; singleFact?: GeographicalFact }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const mapCenter = singleFact ? [singleFact.latitude, singleFact.longitude] : [20, 0]

  const zoom = singleFact ? 6 : 2

  return (
    <MapContainer center={mapCenter as [number, number]} zoom={zoom} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {singleFact ? (
        <Marker position={[singleFact.latitude, singleFact.longitude]} icon={customIcon}>
          <Popup>
            <h3 className="font-bold">{singleFact.title}</h3>
            <p>{singleFact.description}</p>
          </Popup>
        </Marker>
      ) : (
        facts?.map((fact) => (
          <Marker key={fact.id} position={[fact.latitude, fact.longitude]} icon={customIcon}>
            <Popup>
              <h3 className="font-bold">{fact.title}</h3>
              <p>{fact.description}</p>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  )
}

