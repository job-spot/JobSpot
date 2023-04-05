import * as React from "react"
import { Link } from 'react-router-dom'
import logo from '../assets/JOB-SPOT.png'
import MainDashboard from './components/MainDashboard'
import "./styles.module.css"
import styles from './styles/App.module.css'
import AppTable from "./components/AppTable"


function App() {

  return (
    <div className={styles.App}>
      <img className={styles.logo} src={logo} />
      <div className={styles.loginButtons}>
        <button><Link to='/'>DASHBOARD</Link></button>
        <button><Link to='/job'>ADD NEW</Link></button>
        <button><Link to='/signup'>SIGN UP</Link></button>
        <button><Link to='/signin'>SIGN IN</Link></button>
      </div>
      <MainDashboard />
    </div>
  )
}

export default App
