import * as React from "react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/JOB-SPOT.png'
import MainDashboard from './components/MainDashboard'
import Applications from "./components/Applications"
import AppTable from "./components/AppTable";
import "./styles.module.css"
import styles from './styles/App.module.css'
import Signup from "./components/Signup"
import Signin from "./components/Signin"


function App() {
  const [rendered, setRendered] = useState('dashboard');
  const [savedApplications, setSavedApplications] = useState([]);

  const render = () => {
    if (rendered === 'add') {
      return <Applications />
    } else if (rendered === 'job') {
      return savedApplications.length ? ( 
        <AppTable savedApplications={savedApplications} setSavedApplications={setSavedApplications}/>
      ) : (
        <p>Go add your applications!</p>
      );
    } else if (rendered === 'signup') {
      return <Signup />
    } else if (rendered === 'signin') {
      return <Signin />
    } else if (rendered === 'dashboard') {
        return <MainDashboard/>
    } else {
      return null
    }
  }
 
  return (
    <div className={styles.App}>
      <div className={styles.navBar}>
        <img className={styles.logo} src={logo} />
        <div className={styles.loginButtons}>
          <button onClick={() => setRendered('dashboard')}>HOME</button>
          <text>|</text>
          <button onClick={() => setRendered('job')}>DASHBOARD</button>
          <text>|</text>
          <button onClick={() => setRendered('add')}>APPLICATION</button>
          <text>|</text>
          <button onClick={() => setRendered('signup')}>SIGN UP</button>
          <text>|</text>
          <button onClick={() => setRendered('signin')}>SIGN IN</button>
        </div>
      </div>
      <div className={styles.rendered}>
        {render()}
        <AppTable />
      </div>
    </div>
  )
}

export default App
