import type { DayId } from '../data/itinerary';
import { itinerary } from '../data/itinerary';

interface DaySelectorProps {
  selectedDay: DayId;
  onDayChange: (day: DayId) => void;
  isDarkMode: boolean;
}

const days: DayId[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const dayLabels: Record<DayId, string> = {
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
};

export function DaySelector({ selectedDay, onDayChange, isDarkMode }: DaySelectorProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-10 safe-area-bottom">
      <div className="px-4 py-3">
        <div className="flex flex-col gap-2">
          {/* Day buttons */}
          <div className="grid grid-cols-6 gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => onDayChange(day)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    selectedDay === day
                      ? 'bg-blue-500 text-white shadow-md'
                      : isDarkMode
                      ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {dayLabels[day]}
              </button>
            ))}
          </div>

          {/* Selected day info */}
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {itinerary[selectedDay].label}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{itinerary[selectedDay].city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
