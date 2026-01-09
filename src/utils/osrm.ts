/**
 * Fetches a walking route from OSRM (Open Source Routing Machine)
 * @param coordinates Array of [lat, lng] waypoints
 * @returns Array of [lat, lng] coordinates representing the walking route
 */
export async function fetchWalkingRoute(
  coordinates: [number, number][]
): Promise<[number, number][]> {
  if (coordinates.length < 2) {
    return coordinates;
  }

  // OSRM expects coordinates in lng,lat format
  const coordinatesString = coordinates
    .map(([lat, lng]) => `${lng},${lat}`)
    .join(';');

  const url = `https://router.project-osrm.org/route/v1/foot/${coordinatesString}?overview=full&geometries=geojson`;

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
    const route: [number, number][] = data.routes[0].geometry.coordinates.map(
      ([lng, lat]: [number, number]) => [lat, lng]
    );

    return route;
  } catch (error) {
    console.error('Failed to fetch OSRM route:', error);
    return coordinates; // Fallback to straight lines
  }
}
