import React, { useState } from 'react';
import { useInput } from '../Hooks';
import styles from '../styles/Login.module.css';

const Signin = (props) => {
  //--------------------------STATES OF LOGGING IN -----------------------------
  const [username, [setUsername, userNameOnChange]] = useInput('');
  const [password, [setPassword, passwordOnChange]] = useInput('');
  const [errorMessage, setErrorMessage] = useState(null);

  //----------------------------FORM SUMISSION---------------------------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3333/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => res.json())
      .then((res) => {
        //if the response obj has a user_id property
        console.log(res);
        if (res.hasOwnProperty('user_id')) {
          props.setUserId(res.user_id);
          props.setRendered('signedIndashboard');
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
      <h1>Sign in to view your dashboard!</h1>
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
            <label htmlFor="password">PW: </label>
            <input
              type="password"
              name="password"
              onChange={passwordOnChange}
              value={password}
            />
          </div>
          {errorMessage ? <p>{errorMessage}</p> : null}
          <div className={styles.buttonWrap}>
            <button type="submit">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
