import * as React from "react"
import { Link } from 'react-router-dom'
import logo from '../assets/JOB-SPOT.png'
import MainDashboard from './components/MainDashboard'
import "./styles.module.css"
import styles from './styles/App.module.css'
import NavBar from "./components/Navbar"
import AppTable from "./components/AppTable"


function App() {

  // const handleLogoutClick = () => {
  //   fetch('/signout', {
  //     method: 'DELETE'
  //   })
  //     .then((res) => {
  //       if (res.redirected) {
  //         return (window.location.href = res.url);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className={styles.App}>
      <img className={styles.logo} src={logo} />
      <div className={styles.loginButtons}>
        <button>
          <Link to='/signup'>SIGN UP</Link>
        </button>
        <button>
          <Link to='/signin'>SIGN IN</Link>
        </button>
        {/* <button className={styles.button} onClick={handleLogoutClick}>
          Log Out
        </button> */}
      </div>
      <NavBar />
      <MainDashboard />
    </div>
  )
}

export default App
