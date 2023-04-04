import * as React from "react"
import logo from '../assets/JOB-SPOT.png'
import MainDashboard from './components/MainDashboard'
import Login from "./components/Login"
import Signup from "./components/Signup"
import "./styles.module.css"


function App() {
  return (
    <div className="App">
      <img src={logo} />
      <MainDashboard />
      <Login />
      <Signup />
    </div>
  )
}

export default App
