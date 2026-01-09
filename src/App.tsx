import { useState } from 'react';
import { Map } from './components/Map';
import { DaySelector } from './components/DaySelector';
import { DarkModeToggle } from './components/DarkModeToggle';
import { itinerary, type DayId } from './data/itinerary';

function App() {
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

export default App;
