import React, { useState } from "react"
import Applications from "./Applications"
import AppTable from "./AppTable";

//conditional logic to render out Applications or AppTable
function MainDashboard() {
  
  return (
    <div> 
      <AppTable />   
    </div>
  )
}

export default MainDashboard;