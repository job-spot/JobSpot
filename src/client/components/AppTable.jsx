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
    'Delete'
  ]

  const data = [
    {
      status: '',
      company: '',
      position: '',
      salary: '',
      link: '',
      applied: '',
      phoneInterview: '',
      technicalInterview: '',
      comments: '',
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
            <td>{row.applied}</td>
            <td>{row.phoneInterview}</td>
            <td>{row.technicalInterview}</td>
            <td>{row.comments}</td>
            <td><button>ⓧ</button></td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  )
};

export default AppTable;