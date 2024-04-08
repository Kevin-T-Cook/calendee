import React from 'react'
import MonthPicker from '../components/MonthPicker'

export default function Home() {
  return (
    <div className="p-4">
      <label htmlFor="projectName">Calendar Name</label>
      <input type="text" id="projectName" name="projectName" placeholder='Calendar Name'/>

      <label htmlFor="timezone">Calendar Timezone</label>
      <input type="text" id="timezone" name="timezone" placeholder='Calendar Timezone'/>

      <div className="mb-4">
        <label htmlFor="startingMonth" className="block text-sm font-medium text-gray-700">Starting Month</label>
        <MonthPicker />
      </div>
      <label htmlFor="">Dates</label>
      <input type="text" id='dateInput' name='dateInput' placeholder='Dates...' />

      <button>GENERATE CALENDAR</button>
    </div>
 
  )
}
