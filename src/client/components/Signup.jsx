import React, { useState } from 'react';
import { useInput } from '../Hooks';
import styles from '../styles/Login.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  //--------------------------STATES OF SIGNING UP -----------------------------
  const [username, [setUsername, userNameOnChange]] = useInput('');
  const [password, [setPassword, passwordOnChange]] = useInput('');
  const [errorMessage, setErrorMessage] = useState(null);
  //const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  //----------------------------FORM SUMISSION---------------------------------
  const handleFormSubmit = (e) => {
    //Prevent the page reload
    e.preventDefault();
    console.log('submit', username, password);
    fetch('http://localhost:3333/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => res.json())
      .then((res) => {
        //if the response obj has a user_id property
        if (res.hasOwnProperty('user_id')) {
          //console.log(res.user_id);
          //update userId in state?
          console.log();
          props.setUserId(res.user_id);

          //navigate to main dashboard
          props.setRendered('signedIndashboard');
          //navigate('/job');
        } else {
          setErrorMessage(res);
          setUsername('');
          setPassword('');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Sign up now to get started!</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">ID: </label>
            <input
              type="text"
              name="username"
              onChange={userNameOnChange}
              value={username}
            />
          </div>
          <div>
            <label>PW: </label>
            <input
              type="password"
              name="password"
              onChange={passwordOnChange}
              value={password}
            />
          </div>
          {errorMessage ? <p>{errorMessage}</p> : null}
          <div className={styles.buttonWrap}>
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
