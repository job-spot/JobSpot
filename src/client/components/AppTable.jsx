import React, { useState, useEffect } from 'react';
import styles from '../styles/dashboard.module.css';

function AppTable() {
  const [allJobs, setAllJobs] = useState([]);

  const headers = [
    'Status',
    'Company',
    'Position',
    'Salary',
    'Applied',
    'Phone Interview',
    'Technical Interview',
    'Comments',
    'Save / Delete'
  ];

  useEffect(() => {
    const getData = () => {
      //! hard-coded user_id
      const user_id = 1;
      fetch(`http://localhost:3333/api/job/${user_id}`)
        .then((response) => response.json())
        .then((data) => setAllJobs(data))
        .catch((error) => console.log('error in getting application: ', error));
    };
    getData();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    fetch('http://localhost:3333/api/job', {
      method: 'DELETE',
      //! hard-coded - need to replace with user_id and job_id
      body: JSON.stringify({ user_id: 1, job_id: 1 })
    })
      .then((response) => response.json())
      .then((data) => console.log('data for deleting application: ', data))
      .catch((error) => console.log('error in deleting application: ', error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch('http://localhost:3333/api/job', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      //! hard-coded - need to replace with dynamic data from user input
      body: JSON.stringify({
        user_id: 1,
        job_id: 1
      })
    })
      .then((response) => response.json())
      .then((data) => console.log('data for updating application: ', data))
      .catch((error) => console.log('error in updating application: ', error));
  };

  return (
    <div className={styles.outer}>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((heading) => (
                <th>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allJobs.map((row) => (
              <tr>
                <td>{row.status}</td>
                <td>{row.company}</td>
                <td>{row.position}</td>
                <td>${row.salary}</td>
                <td>{row.date_applied}</td>
                <td>{row.phone_interview_date}</td>
                <td>{row.technical_interview_date}</td>
                <td>{row.comments}</td>
                <td>
                  <button onClick={(e) => handleUpdate(e)} type="button">
                    ✅
                  </button>
                  <text>/</text>
                  <button onClick={(e) => handleDelete(e)} type="button">
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppTable;
