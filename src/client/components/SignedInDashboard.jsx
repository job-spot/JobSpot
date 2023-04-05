import React, { useState } from 'react';
import AppTable from './AppTable';
import Applications from './Applications';
import styles from '../styles/App.module.css';
import logo from '../../assets/JOB-SPOT.png';
import { useNavigate } from 'react-router-dom';
import '../styles.module.css';


function SignedInDash(props) {
  const [rendered, setRendered] = useState('job');
  const [savedApplications, setSavedApplications] = useState([]);
  //const [userId, setUserId] = useState(currentId);
  const navigate = useNavigate();
  console.log(props);

  console.log("userId", signedInUserId);
  const render = () => {
    if (rendered === 'add') {
      return <Applications userId={props.userId} />;
    } else if (rendered === 'job') {
      return savedApplications.length ? (
        <AppTable
          userId={props.userId}
          savedApplications={savedApplications}
          setSavedApplications={setSavedApplications}
        />
      ) : (
        <p>
          You have no saved applications!
          <br />
          Go add your applications to view your dashboard!
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.navBar}>
        <img className={styles.logo} src={logo} />
        <div className={styles.loginButtons}>
          <button onClick={() => setRendered('job')}>DASHBOARD</button>
          <text>|</text>
          <button onClick={() => setRendered('add')}>APPLICATION</button>
          <text>|</text>
          <button
            onClick={() => {
              props.setUserId(null);
              props.setRendered('dashboard');
              //navigate('/');
            }}
          >
            SIGN OUT
          </button>
        </div>
      </div>
      <div className={styles.rendered}>{render()}</div>
    </div>
  );
}

export default SignedInDash;
