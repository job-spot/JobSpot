import * as React from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <h1>JobSpot</h1>
      <Login />
      <Signup />
    </div>
  )
}

export default App
