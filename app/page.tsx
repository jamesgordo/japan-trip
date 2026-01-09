'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { DaySelector } from '@/components/DaySelector';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { itinerary, type DayId } from '@/data/itinerary';

// Dynamically import Map component with SSR disabled to avoid "window is not defined" error
const Map = dynamic(() => import('@/components/Map').then((mod) => ({ default: mod.Map })), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<DayId>('monday');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentDayData = itinerary[selectedDay];

  return (
    <div className={`h-screen w-full flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      {/* Map fills the viewport */}
      <div className="flex-1 relative">
        <Map dayData={currentDayData} isDarkMode={isDarkMode} />
      </div>

      {/* Dark mode toggle at top-right */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={setIsDarkMode} />

      {/* Day selector at bottom */}
      <DaySelector selectedDay={selectedDay} onDayChange={setSelectedDay} isDarkMode={isDarkMode} />
    </div>
  );
}
