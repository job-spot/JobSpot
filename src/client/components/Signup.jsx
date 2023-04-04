import React, { useState } from 'react';
import { useInput } from '../Hooks';

const Signup = () => {
  //--------------------------STATES OF SIGNING UP -----------------------------
  const [username, [setUsername, userNameOnChange]] = useInput('');
  const [password, [setPassword, passwordOnChange]] = useInput('');
  const [errorMessage, setErrorMessage] = useState(null);

  //----------------------------FORM SUMISSION---------------------------------
  /** When Signup button is clicked, submit a post request to signup with username & password
   * If username in the database, backend will send back an error message => display the error message
   * Else backend will create a user in database and redirect to homepage
   */
  const handleFormSubmit = (e) => {
    //Prevent the page reload
    e.preventDefault();
    console.log('submit');
    //Send post request with username & password to login
    fetch(`/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      //If not being redirect to recipe page, then get the text message
      .then((res) => {
        //If username & password match, redirect according backend url
        if (res.redirected) {
          return (window.location.href = res.url);
        }
        //Else, get the error message from backend
        return res.json();
      })
      .then((errorMess) => {
        // Set ErrorMessage state => this will cause errorMessage to be rendered
        setErrorMessage(errorMess);
        //Reset username & password
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>SIGNUP TO GET STARTED!</h1>
      <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='username'>username: </label>
          <input type='text' name='username' onChange={userNameOnChange} value={username} />
        </div>
        <div>
          <label>password: </label>
          <input type='password' name='password' onChange={passwordOnChange} value={password} />
        </div>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <button type='submit'>SIGN UP</button>
      </form>
      </div>
    </div>
  );
};
export default Signup;
