import React from "react"
import DatePicker from "react-datepicker"
import { useInput } from '../Hooks';
import { useState } from "react";
import styles from '../styles/Applications.module.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Applications() {
  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    fetch(`/job`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => {
        console.log(res);
        if (res.redirected) {
          return (window.location.href = res.url);
        }
        return res.json();
      })
      .then((errorMess) => {
        setErrorMessage(errorMess);
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      <h1>Add new application!</h1>
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
