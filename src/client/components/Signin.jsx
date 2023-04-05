import React, { useState } from 'react';
import { useInput } from '../Hooks';
import styles from '../styles/Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //--------------------------STATES OF LOGGING IN -----------------------------
  const [username, [setUsername, userNameOnChange]] = useInput('');
  const [password, [setPassword, passwordOnChange]] = useInput('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  //----------------------------FORM SUMISSION---------------------------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    fetch('http://localhost:3333/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      // .then((res) => {
      //   console.log(res);
      //   if (res.redirected) {
      //     return (window.location.href = res.url);
      //   }
      //   return res.json();
      // })
      // .then((errorMess) => {
      //   setErrorMessage(errorMess);
      //   setUsername('');
      //   setPassword('');
      // })
      .then((res) => res.json())
      .then((res) => {
        //if the response obj has a user_id property
        console.log(res);
        if (res.hasOwnProperty('user_id')) {
          console.log('hi from inside if res  has property:', res.user_id);
          //update userId in state?
          setUserId(res.user_id);
          //navigate to main dashboard
          navigate(`/job/${res.user_id}`);
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
export default Login;
