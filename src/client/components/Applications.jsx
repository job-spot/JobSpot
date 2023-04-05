import React, { useState, useInput } from 'react';
import DatePicker, { setDefaultLocale } from 'react-datepicker';
import styles from '../styles/Applications.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function Applications() {
  const [startApplied, setApplied] = useState(new Date());
  const [startPhone, setPhone] = useState(new Date());
  const [startTech, setTech] = useState(new Date());
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addApplication();
  };

  const handleComments = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, options, selectedIndex } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: options[selectedIndex].value
    }));
  };

  //make post request here to send back the object of inputs for new application entry
  const addApplication = () => {
    fetch('/api/job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => console.log('data in adding new application: ', data))
      .catch((err) => console.log('error in adding new application: ', err));
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
    'Comments'
  ];

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
                      <select name="status" onChange={handleSelectChange}>
                        <option value="ready-to-apply">Ready to Apply</option>
                        <option value="applied">Applied</option>
                        <option value="phone-interview">Phone Interview</option>
                        <option value="tech-interview">Tech Interview</option>
                        <option value="rejected">Rejected</option>
                        <option value="offered">Offered</option>
                        <option value="ghosted">Ghosted</option>
                      </select>
                    ) : header === 'Comments' ? (
                      <textarea
                        name="comments"
                        rows="1"
                        onChange={handleComments}
                      ></textarea>
                    ) : header === 'Applied' ? (
                      <DatePicker
                        selected={startApplied}
                        onChange={(date) => setApplied(date)}
                      />
                    ) : header === 'Phone Interview' ? (
                      <DatePicker
                        selected={startPhone}
                        onChange={(date) => setPhone(date)}
                      />
                    ) : header === 'Technical Interview' ? (
                      <DatePicker
                        selected={startTech}
                        onChange={(date) => setTech(date)}
                      />
                    ) : (
                      <input type="text" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.buttonWrap}>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Applications;
