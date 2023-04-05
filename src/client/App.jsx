import * as React from "react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/JOB-SPOT.png'
import MainDashboard from './components/MainDashboard'
import "./styles.module.css"
import styles from './styles/App.module.css'
import Signup from "./components/Signup"
import Signin from "./components/Signin"


function App() {
  const [rendered, setRendered] = useState('dashboard');
  const [savedApplications, setSavedApplications] = useState([]);

  const render = () => {
    if (rendered === 'signup') {
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
          <button onClick={() => setRendered('signup')}>SIGN UP</button>
          <text>|</text>
          <button onClick={() => setRendered('signin')}>SIGN IN</button>
        </div>
      </div>
      <div className={styles.rendered}>
        {render()}
      </div>
    </div>
  )
}

export default App
