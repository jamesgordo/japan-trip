import { useState } from 'react';
import { Map } from './components/Map';
import { DaySelector } from './components/DaySelector';
import { itinerary, type DayId } from './data/itinerary';

function App() {
  const [selectedDay, setSelectedDay] = useState<DayId>('monday');

  const currentDayData = itinerary[selectedDay];

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Map fills the viewport */}
      <div className="flex-1 relative">
        <Map dayData={currentDayData} />
      </div>

      {/* Day selector at bottom */}
      <DaySelector selectedDay={selectedDay} onDayChange={setSelectedDay} />
    </div>
  );
}

export default App;
