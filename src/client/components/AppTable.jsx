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

  const data = [
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
  
  return (
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
        {data.map((row) => 
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
            <td><button>✅</button><text>/</text><button>❌</button></td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  )
};

export default AppTable;