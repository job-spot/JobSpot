import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from '../styles/Applications.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function Applications({user_id}) {
  const [formData, setFormData] = useState({});
  console.log("here:", user_id)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addApplication();
    console.log('formData', formData);
  };

  const handleInput = (e) => {
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

  const handleDateChange = ({ name, value }) => {
    const dateValue = new Date(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: dateValue
    }));
  };

  //make post request here to send back the object of inputs for new application entry
  const addApplication = () => {
    //! hard coded - need to replace user_id
    console.log("insideaddapp:", user_id)

    formData['user_id'] = user_id;
    fetch(`http://localhost:3333/api/job/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => console.log('data for adding new application: ', data))
      .catch((error) =>
        console.log('error in adding new application: ', error)
      );
  };

  const headers = [
    'Status',
    'Company',
    'Position',
    'Salary',
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
                        onChange={handleInput}
                      ></textarea>
                    ) : header === 'Company' ? (
                      <input
                        name="company"
                        type="text"
                        onChange={handleInput}
                      />
                    ) : header === 'Position' ? (
                      <input
                        name="position"
                        type="text"
                        onChange={handleInput}
                      />
                    ) : header === 'Salary' ? (
                      <input name="salary" type="text" onChange={handleInput} />
                    ) : header === 'Applied' ? (
                      <DatePicker
                        name="date_applied"
                        selected={formData['date_applied']}
                        onChange={(date) =>
                          handleDateChange({
                            name: 'date_applied',
                            value: date
                          })
                        }
                      />
                    ) : header === 'Phone Interview' ? (
                      <DatePicker
                        name="phone_interview_date"
                        selected={formData['phone_interview_date']}
                        onChange={(date) =>
                          handleDateChange({
                            name: 'phone_interview_date',
                            value: date
                          })
                        }
                      />
                    ) : header === 'Technical Interview' ? (
                      <DatePicker
                        name="technical_interview_date"
                        selected={formData['technical_interview_date']}
                        onChange={(date) =>
                          handleDateChange({
                            name: 'technical_interview_date',
                            value: date
                          })
                        }
                      />
                    ) : null}
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
