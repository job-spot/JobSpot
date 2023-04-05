import React from "react"
import styles from '../styles/dashboard.module.css'

function AppTable() {

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
    'Save / Delete'
  ]

  const testdata = [
    {
      status: '',
      company: '',
      position: '',
      salary: '',
      link: '',
      date_applied: '',
      phone_interview_date: '',
      technical_interview_date: '',
      comments: '',
      user_id: ''
    }
  ]
  const handleDelete = (e) => {
    e.preventDefault();
    fetch('/api/jobs', {
    method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: 'Applied',
      company: 'Jen Inc.',
      position: 'Software Engineer',
      salary: 999999999,
      date_applied: '2022-03-30',
      phone_interview_date: '2022-04-05',
      technical_interview_date: '2022-04-12',
      comments: 'how to get this to work??',
      user_id: 123,
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <div className={styles.outer}>
      <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((heading) => 
              <th>{heading}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {testdata.map((row) => 
            <tr>
              <td>{row.status}</td>
              <td>{row.company}</td>
              <td>{row.position}</td>
              <td>{row.salary}</td>
              <td>{row.link}</td>
              <td>{row.date_applied}</td>
              <td>{row.phone_interview_date}</td>
              <td>{row.technical_interview_date}</td>
              <td>{row.comments}</td>
              <td>
                <button onClick={(e) => handleUpdate(e)} type='button'>✅</button>
                <text>/</text>
                <button onClick={(e) => handleDelete(e)} type='button'>❌</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  )
};

export default AppTable;