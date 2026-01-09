# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mobile-first React application for visualizing a day-by-day walking itinerary through Japan (Osaka and Tokyo) using Leaflet and OpenStreetMap.

## Tech Stack

- **React 19** (latest version)
- **react-leaflet** for map rendering
- **TailwindCSS** for styling
- **ShadCN UI Components**
- **Leaflet with OpenStreetMap tiles** (no API keys required)

## Critical Constraints

- **NO Google Maps** - must use OpenStreetMap
- **NO Mapbox** - must use OpenStreetMap
- **NO paid APIs or services**
- **NO authentication**
- **NO backend** - this is a pure frontend application
- **Use EXACT dataset from `docs/dataset.ts`** - do not invent locations or modify data

## Architecture

### Data Structure

The itinerary data is located in `docs/dataset.ts` and contains:
- 6 days (Monday-Saturday)
- Each day has: `id`, `label`, `city`, `center` (map coordinates), `pins` (locations), and `route` (polyline coordinates)
- Days are split between Osaka (Mon-Wed) and Tokyo (Thu-Sat)

### Core Features

1. **Day selector** - allows switching between Monday through Saturday
2. **Dynamic map updates** - switching days updates map center, pins, and walking routes
3. **Interactive pins** - show popup with location name on click
4. **Walking routes** - rendered as polylines connecting locations

### UX Requirements

- **Mobile-first design** - optimize for mobile viewport
- **Map fills viewport** - maximize map visibility
- **Day selector always visible** - positioned at top or bottom
- **Clean, minimal UI** - avoid clutter

## Development Guidelines

- Code must be clean, readable, and production-ready
- Ensure Leaflet CSS is properly included
- Test on mobile viewports first
