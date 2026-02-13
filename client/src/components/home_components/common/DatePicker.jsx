import { useState } from 'react';

const DatePicker = ({ value, onChange, placeholder = "Select date", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onChange?.(selectedDate);
    setIsOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return placeholder;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const days = [];
  const totalDays = daysInMonth(currentDate);
  const startingDay = firstDayOfMonth(currentDate);

  for (let i = 0; i < startingDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
  }

  for (let day = 1; day <= totalDays; day++) {
    const isSelected = value && 
      value.getDate() === day && 
      value.getMonth() === currentDate.getMonth() && 
      value.getFullYear() === currentDate.getFullYear();

    days.push(
      <button
        key={day}
        onClick={() => handleDateSelect(day)}
        className={`w-10 h-10 rounded-lg text-sm transition-all
          ${isSelected 
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
            : 'text-white/80 hover:bg-white/10'
          }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
      >
        <span>{formatDate(value)}</span>
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[90]" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 left-0 w-72 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl z-[100] p-4">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white font-medium">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button
                onClick={nextMonth}
                className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div key={day} className="w-10 h-10 flex items-center justify-center text-white/40 text-xs">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days}
            </div>

            {/* Presets */}
            <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  const today = new Date();
                  onChange?.(today);
                  setIsOpen(false);
                }}
                className="flex-1 px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Today
              </button>
              <button
                onClick={() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1);
                  onChange?.(tomorrow);
                  setIsOpen(false);
                }}
                className="flex-1 px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Tomorrow
              </button>
              <button
                onClick={() => {
                  const nextWeek = new Date();
                  nextWeek.setDate(nextWeek.getDate() + 7);
                  onChange?.(nextWeek);
                  setIsOpen(false);
                }}
                className="flex-1 px-3 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Next Week
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DatePicker;
