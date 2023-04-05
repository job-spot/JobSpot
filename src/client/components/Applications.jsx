import React from "react"
import DatePicker from "react-datepicker"
import { useInput } from '../Hooks';
import { useState } from "react";
import styles from '../styles/Applications.module.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Applications() {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const inputs = querySelectorAll('input, select, textarea')
    addApplication();
  };

    //   status,
    //   company,
    //   position,
    //   salary,
    //   date_applied,
    //   phone_interview_date,
    //   technical_interview_date,
    //   comments,
    //   user_id
    // }

  //make post request here to send back the object of inputs for new application entry
  const addApplication = () => {
    fetch(`/api/job`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) //<------object
    })
  }

  const headers = [
    'Status',
    'Company',
    'Position',
    'Salary',
    'Link',
    'Applied',
    'Phone Interview',
    'Technical Interview',
    'Comments',
  ]

  return (
    <div className={styles.wrapper}> 
      <div>
      <form onSubmit={handleFormSubmit}>
        <table className={styles.table}>
          <tbody>
            {headers.map((header) => (
              <tr key={header}>
                <td>{header}</td>
                <td>
                  {header === 'Status' ? (
                    <select>
                      <option value="ready-to-apply">Ready to Apply</option>
                      <option value="applied">Applied</option>
                      <option value="phone-interview">Phone Interview</option>
                      <option value="tech-interview">Tech Interview</option>
                      <option value="rejected">Rejected</option>
                      <option value="offered">Offered</option>
                      <option value="ghosted">Ghosted</option>
                    </select>
                  ) : header === 'Comments' ? (
                    <textarea rows='1'></textarea>
                  ) : (header === 'Applied' || header === 'Phone Interview' || header === 'Technical Interview') ? (
                    <DatePicker
                      selected={startDate}
                      selectsStart
                      startDate={startDate}
                      onChange={date => setStartDate(date)}
                    />   
                  ) : (
                    <input type="text" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.buttonWrap}><button type='submit'>Add</button></div>
      </form>
      </div>
    </div>
  )
};
export default Applications;
