"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { IoClose } from "react-icons/io5";

const MapComponent: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const pickup = "Islamabad, PK";
  const destination = "Peshawar, Pak";

  useEffect(() => {
    if (googleLoaded && window.google && window.google.maps) {
      const fetchRoute = async () => {
        try {
          const directionsService = new window.google.maps.DirectionsService();
          const result = await directionsService.route({
            origin: pickup,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
          });

          setDirections(result);

          const map = new window.google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              zoom: 7,
              center: { lat: 391.8283, lng: -8.5795 },
            }
          );

          const directionsRenderer = new window.google.maps.DirectionsRenderer({
            polylineOptions: {
              strokeColor: "black",
              strokeOpacity: 1.0,
              strokeWeight: 3,
            },
          });
          directionsRenderer.setMap(map);
          directionsRenderer.setDirections(result);

          setMap(map);
        } catch (error) {
          console.error("Error fetching route:", error);
        }
      };

      fetchRoute();
    }
  }, [googleLoaded]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBa7gpIFsqCjngZdpif0HPOSJBP1mQ_ty8&libraries=places`}
        onLoad={() => setGoogleLoaded(true)}
      />

      <div className="fixed inset-0 flex items-center justify-center z-[100]">
        <div className="bg-white border rounded-lg p-6 w-[90%] md:w-1/2 h-[80vh] resize overflow-hidden relative">
          <button
            className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
            onClick={closeModal}
          >
            <IoClose className="w-6 h-6" />
          </button>

          <div id="map" className="w-full h-full overflow-hidden">
            {directions ? (
              <p>
                Route from {pickup} to {destination} loaded!
              </p>
            ) : (
              <p>Loading route...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
