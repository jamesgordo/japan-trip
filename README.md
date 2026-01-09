# Japan Trip Itinerary Visualizer

A mobile-first React application that visualizes a day-by-day walking itinerary through Japan (Osaka and Tokyo) using Leaflet and OpenStreetMap.

## Features

- **Day-by-Day Navigation**: Switch between Monday through Saturday to view different itineraries
- **Interactive Map**: View walking routes and location pins on OpenStreetMap
- **Location Popups**: Click on markers to see location names
- **Walking Routes**: Visual polylines showing the walking path between locations
- **Mobile-First Design**: Optimized for mobile devices with a clean, minimal UI

## Tech Stack

- **React 19** - Latest version with modern hooks
- **TypeScript** - For type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **react-leaflet** - React components for Leaflet maps
- **Leaflet** - Interactive map library
- **OpenStreetMap** - Free, open-source map tiles (no API keys required)
- **Tailwind CSS** - Utility-first CSS framework

## Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd japan-trip
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint

## Project Structure

```
japan-trip/
├── src/
│   ├── components/
│   │   ├── Map.tsx          # Leaflet map component with markers and routes
│   │   └── DaySelector.tsx  # Day selection UI component
│   ├── data/
│   │   └── itinerary.ts     # Trip data (locations, routes, coordinates)
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind directives
├── index.html               # HTML template with Leaflet CSS
├── package.json             # Project dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Itinerary

### Osaka (Monday - Wednesday)
- **Monday**: Shinsekai & Tennoji
- **Tuesday**: Namba & Dotonbori
- **Wednesday**: Umeda Skyline

### Tokyo (Thursday - Saturday)
- **Thursday**: Tokyo Arrival & Riverside
- **Friday**: Asakusa & Skytree
- **Saturday**: Kappabashi & Farewell Tokyo

## Development Notes

- The map automatically re-centers when switching days
- All location data is stored in `src/data/itinerary.ts`
- No external APIs or authentication required
- No backend - pure frontend application
- Mobile-first responsive design with bottom-positioned day selector

## Building for Production

```bash
pnpm build
```

The production-ready files will be in the `dist/` directory. You can preview the production build with:

```bash
pnpm preview
```

## License

This project was created for personal travel planning purposes.
