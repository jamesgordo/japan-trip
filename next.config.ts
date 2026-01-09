import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disabled to prevent Leaflet MapContainer double initialization
};

export default nextConfig;
