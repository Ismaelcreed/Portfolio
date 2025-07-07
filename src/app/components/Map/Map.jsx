"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [-18.8975, 47.5356]; 

const LeafletMap = () => {
  return (
    <div className="w-full h-[500px]">
      <MapContainer center={position} zoom={15} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Lot VQ1C Mandroseza, Antananarivo, Madagascar
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
