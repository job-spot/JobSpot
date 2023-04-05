import React from "react"
import graphic from '../../assets/graphic.png'
import styles from '../styles/home.module.css'

function MainDashboard() {
  
  return (
    <div className={styles.wrapper}> 
      <div className={styles.left}>
        <img src={graphic}/>
 
      </div>
      <div className={styles.right}>
        <h1>Effortlessly track your applications with JobSpot</h1>
        <p>Our beautiful dashboard helps you to keep organized while searching for your next job! Sign up now to get started.</p>           
      </div>  
    </div>
  )
}

export default MainDashboard;