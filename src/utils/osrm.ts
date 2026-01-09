import type { RouteSegment, TransportMode } from '../data/itinerary';

export interface RenderedSegment {
  coordinates: [number, number][];
  mode: TransportMode;
  color: string;
  dashArray?: string;
}

/**
 * Simplifies a route by reducing the number of points
 * Uses Douglas-Peucker-like algorithm to keep only significant turns
 */
function simplifyRoute(coordinates: [number, number][], tolerance: number = 0.00005): [number, number][] {
  if (coordinates.length <= 2) return coordinates;

  const simplified: [number, number][] = [coordinates[0]!];
  let prev = coordinates[0]!;

  for (let i = 1; i < coordinates.length - 1; i++) {
    const current = coordinates[i]!;
    const next = coordinates[i + 1]!;

    // Calculate bearing change
    const bearing1 = Math.atan2(current[1] - prev[1], current[0] - prev[0]);
    const bearing2 = Math.atan2(next[1] - current[1], next[0] - current[0]);
    const bearingChange = Math.abs(bearing1 - bearing2);

    // Keep point if there's a significant turn (>15 degrees) or significant distance
    const distance = Math.sqrt(
      Math.pow(current[0] - prev[0], 2) + Math.pow(current[1] - prev[1], 2)
    );

    if (bearingChange > 0.26 || distance > tolerance) {
      simplified.push(current);
      prev = current;
    }
  }

  simplified.push(coordinates[coordinates.length - 1]!);
  return simplified;
}

/**
 * Fetches a walking route from OSRM (Open Source Routing Machine)
 * @param coordinates Array of [lat, lng] waypoints
 * @param simplified If true, returns a simplified route with fewer points
 * @returns Array of [lat, lng] coordinates representing the walking route
 */
export async function fetchWalkingRoute(
  coordinates: [number, number][],
  simplified: boolean = false
): Promise<[number, number][]> {
  if (coordinates.length < 2) {
    return coordinates;
  }

  // If simplified mode, just return direct lines between waypoints
  if (simplified) {
    return coordinates;
  }

  // OSRM expects coordinates in lng,lat format
  const coordinatesString = coordinates
    .map(([lat, lng]) => `${lng},${lat}`)
    .join(';');

  const url = `https://router.project-osrm.org/route/v1/foot/${coordinatesString}?overview=simplified&geometries=geojson`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error('OSRM API error:', response.status);
      return coordinates; // Fallback to straight lines
    }

    const data = await response.json();

    if (data.code !== 'Ok' || !data.routes?.[0]?.geometry?.coordinates) {
      console.error('OSRM response error:', data.code);
      return coordinates; // Fallback to straight lines
    }

    // OSRM returns coordinates in [lng, lat] format, we need [lat, lng]
    let route: [number, number][] = data.routes[0].geometry.coordinates.map(
      ([lng, lat]: [number, number]) => [lat, lng]
    );

    // Further simplify the route to reduce visual complexity
    route = simplifyRoute(route);

    return route;
  } catch (error) {
    console.error('Failed to fetch OSRM route:', error);
    return coordinates; // Fallback to straight lines
  }
}

/**
 * Get visual styling for a transport mode
 */
function getSegmentStyle(mode: TransportMode): { color: string; dashArray?: string } {
  switch (mode) {
    case 'walk':
      return { color: '#3b82f6' }; // Blue solid line
    case 'train':
      return { color: '#ef4444', dashArray: '15, 10' }; // Red dashed line (more visible)
    case 'subway':
      return { color: '#8b5cf6', dashArray: '15, 10' }; // Purple dashed line (more visible)
    case 'bus':
      return { color: '#f59e0b', dashArray: '15, 10' }; // Orange dashed line (more visible)
    default:
      return { color: '#3b82f6' };
  }
}

/**
 * Processes route segments with different transport modes
 * @param segments Array of route segments with transport modes
 * @returns Array of rendered segments with coordinates and styling
 */
export async function processMultiModalRoute(
  segments: RouteSegment[]
): Promise<RenderedSegment[]> {
  const renderedSegments: RenderedSegment[] = [];

  for (const segment of segments) {
    const style = getSegmentStyle(segment.mode);

    if (segment.mode === 'walk') {
      // Fetch walking route from OSRM (or simplified direct line)
      const coordinates = await fetchWalkingRoute(
        [segment.from, segment.to],
        segment.simplified ?? false
      );
      renderedSegments.push({
        coordinates,
        mode: segment.mode,
        ...style,
      });
    } else {
      // For transit (train/subway/bus), draw a straight dashed line
      // In a production app, you'd integrate with a transit API
      renderedSegments.push({
        coordinates: [segment.from, segment.to],
        mode: segment.mode,
        ...style,
      });
    }
  }

  return renderedSegments;
}
