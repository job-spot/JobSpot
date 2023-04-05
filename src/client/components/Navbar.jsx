import React from "react"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <button><Link to='/job'>DASHBOARD</Link></button>
        <button>ADD NEW</button>
    </div>
  )
}

export default NavBar;