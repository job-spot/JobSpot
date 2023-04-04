import React from "react"
import Applications from "./Applications"
import NavBar from "./Navbar";
import ApplicationNav from "./ApplicationNav";

function MainDashboard() {
  const allApps = []
    for (let i = 0; i < 10; i++) {
      allApps.push(<Applications />)
    }
  
  return (
    <div> 
      <NavBar />   
      <ApplicationNav />
      {allApps}
    </div>
  )
}

export default MainDashboard