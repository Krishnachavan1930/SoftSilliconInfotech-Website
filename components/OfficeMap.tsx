"use client";

import React, { useEffect, useState } from "react";

type LeafletModule = typeof import("leaflet");

type ReactLeafletModule =
  typeof import("react-leaflet");

export default function OfficeMap() {
  const [leaflet, setLeaflet] =
    useState<LeafletModule | null>(null);

  const [reactLeaflet, setReactLeaflet] =
    useState<ReactLeafletModule | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadMap() {
      try {
        /* ======================================================
           LOAD LEAFLET CSS
        ====================================================== */

        if (
          !document.getElementById(
            "leaflet-css"
          )
        ) {
          const link =
            document.createElement("link");

          link.id = "leaflet-css";

          link.rel = "stylesheet";

          link.href =
            "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";

          document.head.appendChild(link);
        }

        /* ======================================================
           LOAD LEAFLET
        ====================================================== */

        const leafletModule =
          await import("leaflet");

        const reactLeafletModule =
          await import("react-leaflet");

        if (mounted) {
          setLeaflet(leafletModule);

          setReactLeaflet(
            reactLeafletModule
          );
        }
      } catch (error) {
        console.error(
          "Failed to load map:",
          error
        );
      }
    }

    loadMap();

    return () => {
      mounted = false;
    };
  }, []);

  /* ==========================================================
     LOADING
  ========================================================== */

  if (!leaflet || !reactLeaflet) {
    return (
      <div className="w-full h-[400px] rounded-3xl overflow-hidden bg-slate-100 flex items-center justify-center">
        <p className="text-slate-500 text-sm">
          Loading map...
        </p>
      </div>
    );
  }

  const {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } = reactLeaflet;

  /* ==========================================================
     NASHIK OFFICE
  ========================================================== */

  const officePosition: [
    number,
    number
  ] = [
    20.007174,
    73.785055,
  ];

  /* ==========================================================
     MARKER
  ========================================================== */

  const markerIcon = leaflet.icon({
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

    iconSize: [25, 41],

    iconAnchor: [12, 41],

    popupAnchor: [1, -34],

    shadowSize: [41, 41],
  });

  /* ==========================================================
     MAP
  ========================================================== */

  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">

      <MapContainer
        center={officePosition}
        zoom={17}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={officePosition}
          icon={markerIcon}
        >

          <Popup>

            <div className="text-sm leading-5">

              <strong className="font-bold text-base">
                Softsilicon Infotech LLP
              </strong>

              <br />

              410, 4th Floor,

              <br />

              Silicon Business Center,

              <br />

              Guru Gobind Singh College Road,

              <br />

              Near Pathardi Gaon Circle,

              <br />

              Nashik, Maharashtra 422010

            </div>

          </Popup>

        </Marker>

      </MapContainer>

    </div>
  );
}