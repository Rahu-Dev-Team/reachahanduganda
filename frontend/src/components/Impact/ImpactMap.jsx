import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Impact data for various Ugandan regions
const impactData = [
  { region: "Kampala", lat: 0.3476, lng: 32.5825, count: 4200 },
  { region: "Gulu", lat: 2.7746, lng: 32.298, count: 2300 },
  { region: "Mbale", lat: 1.0644, lng: 34.1794, count: 1600 },
  { region: "Mbarara", lat: -0.6075, lng: 30.6545, count: 2800 },
];

// Define bounds to cover Uganda only
const ugandaBounds = L.latLngBounds([-1.5, 29.5], [4.3, 35.1]);

export default function ImpactMap() {
  return (
    <div className="relative w-full min-h-screen z-0">
      <MapContainer
        center={[1.3733, 32.2903]}
        zoom={7}
        scrollWheelZoom={true}
        bounds={ugandaBounds}
        maxBounds={ugandaBounds}
        maxBoundsViscosity={1.0}
        className="w-full h-screen z-0 "
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {impactData.map((loc, index) => (
          <CircleMarker
            key={index}
            center={[loc.lat, loc.lng]}
            radius={Math.log(loc.count) * 2}
            color="#facc15"
            fillColor="blue"
            fillOpacity={0.7}
          >
            <Tooltip
              direction="center"
              offset={[0, -10]}
              opacity={1}
              permanent={false}
            >
              <div className="text-sm font-semibold text-black">
                {loc.region} <br />
                {loc.count.toLocaleString()} people served
              </div>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
