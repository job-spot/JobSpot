import * as React from "react"
import { useState } from 'react'
import "./styles/App.css"
import logo from '../assets/JOB-SPOT.png'
import MainDashboard from './components/MainDashboard'


function App() {
  return (
    <div className="App">
      <img src={logo} />
      <MainDashboard />
    </div>
  )
}

export default App
