import React, { useState } from 'react';
import { useInput } from '../Hooks';
import styles from '../styles/Login.module.css';


const Login = () => {
  //--------------------------STATES OF LOGGING IN -----------------------------
  const [username, [setUsername, userNameOnChange]] = useInput('');
  const [password, [setPassword, passwordOnChange]] = useInput('');
  const [errorMessage, setErrorMessage] = useState(null);

  //----------------------------FORM SUMISSION---------------------------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    fetch(`/auth/signin`, {
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

  return (
    <div className={styles.wrapper}>
      <h1>Sign in to view your dashboard!</h1>
      <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='username'>ID: </label>
          <input type='text' name='username' onChange={userNameOnChange} value={username} />
        </div>
        <div>
          <label htmlFor='password'>PW: </label>
          <input type='password' name='password' onChange={passwordOnChange} value={password} />
        </div>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <div className={styles.buttonWrap}><button type='submit'>SIGN IN</button></div>
      </form>
      </div>
    </div>
  );
};
export default Login;