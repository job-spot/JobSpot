import React from "react"
import DatePicker from "react-datepicker"
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Applications() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <ul className="applications">
      <div>
         <select className='Status'>Statusue="Saved"
          <option value="ready-to-apply">Ready to Apply</option>
          <option value="applied">Applied</option>
          <option value="phone-interview">Phone Interview</option>
          <option value="tech-interview">Tech Interview</option>
          <option value="rejected">Rejected</option>
          <option value="offered">Offered</option>
          <option value="ghosted">Ghosted</option>
          </select>
        </div>
        <div>
          <input className="Company"></input>
        </div>
        <div>
          <input className="Position"></input>
        </div>
        <div>
          <input className="Salary"></input>
        </div>
        <div>
          <input className="Link"></input>
        </div> 
        <div>
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          onChange={date => setStartDate(date)}
        />       
         </div>
        <div>
        <div>
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            onChange={date => setStartDate(date)}
          />       
         </div>
        </div>
        <div>
          <div>
            <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              onChange={date => setStartDate(date)}
            />       
          </div>
        </div>
        <div>
          <textarea rows='1' className="Comment"></textarea>
        </div>
      </ul>
    </div>
  )
}
;
export default Applications