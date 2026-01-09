import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import type { DayData, RouteSegment } from '../data/itinerary';
import { fetchWalkingRoute, processMultiModalRoute, type RenderedSegment } from '../utils/osrm';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  dayData: DayData;
}

// Component to handle map center updates
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 14, { animate: true });
  }, [center, map]);

  return null;
}

export function Map({ dayData }: MapProps) {
  const center: [number, number] = [dayData.center[0]!, dayData.center[1]!];
  const [renderedSegments, setRenderedSegments] = useState<RenderedSegment[]>([]);
  const [isLoadingRoute, setIsLoadingRoute] = useState(true);

  // Check if dayData uses new multi-modal format or old simple route format
  const isMultiModal = 'segments' in dayData;

  // Fetch routes when dayData changes
  useEffect(() => {
    const loadRoute = async () => {
      setIsLoadingRoute(true);

      if (isMultiModal) {
        // New multi-modal format with segments
        const segments = (dayData as DayData & { segments: RouteSegment[] }).segments;
        const rendered = await processMultiModalRoute(segments);
        setRenderedSegments(rendered);
      } else {
        // Legacy format: simple walking route
        const waypoints: [number, number][] = dayData.route.map(
          ([lat, lng]) => [lat!, lng!]
        );
        const osrmRoute = await fetchWalkingRoute(waypoints);
        setRenderedSegments([
          {
            coordinates: osrmRoute,
            mode: 'walk',
            color: '#3b82f6',
          },
        ]);
      }

      setIsLoadingRoute(false);
    };

    loadRoute();
  }, [dayData.id, isMultiModal]);

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater center={center} />

      {/* Render markers for each pin */}
      {dayData.pins.map((pin, index) => (
        <Marker key={index} position={[pin.lat, pin.lng]}>
          <Popup>
            <div className="text-sm font-medium">{pin.name}</div>
          </Popup>
        </Marker>
      ))}

      {/* Render route segments */}
      {!isLoadingRoute &&
        renderedSegments.map((segment, index) => (
          <Polyline
            key={index}
            positions={segment.coordinates}
            color={segment.color}
            dashArray={segment.dashArray}
            weight={segment.mode === 'walk' ? 3 : 5}
            opacity={segment.mode === 'walk' ? 0.7 : 0.9}
          />
        ))}
    </MapContainer>
  );
}
