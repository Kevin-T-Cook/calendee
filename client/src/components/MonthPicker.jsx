import React, { useState } from 'react';

const months = [
  'January', 'February', 'March', 
  'April', 'May', 'June', 
  'July', 'August', 'September', 
  'October', 'November', 'December'
];

function MonthPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <input
        type="text"
        readOnly
        value={selectedMonth}
        onClick={() => setIsOpen(!isOpen)}
        placeholder="Select Month"
        className="cursor-pointer bg-white border border-gray-300 rounded shadow-sm p-2 w-full"
      />
      {isOpen && (
        <div className="absolute left-0 w-full bg-white mt-1 border border-gray-300 rounded shadow-lg z-10">
          <div className="grid grid-cols-3 gap-0.5">
            {months.map((month, index) => (
              <div
                key={index}
                onClick={() => handleMonthSelect(month)}
                className={`p-3 hover:bg-blue-600 hover:text-white rounded ${
                  selectedMonth === month ? 'bg-blue-500 text-white' : 'text-gray-700'
                }`}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MonthPicker;
