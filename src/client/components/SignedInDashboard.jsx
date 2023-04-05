import React, { useState } from 'react';
import AppTable from './AppTable';
import Applications from './Applications';
import styles from '../styles/App.module.css';
import logo from '../../assets/JOB-SPOT.png';
import { useNavigate } from 'react-router-dom';
import '../styles.module.css';


function SignedInDash() {
  const [rendered, setRendered] = useState('job');
  const [savedApplications, setSavedApplications] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const signedInUserId = searchParams.get('userId');

  console.log("userId", signedInUserId);
  const render = () => {
    if (rendered === 'add') {
      return <Applications user_id={signedInUserId}/>;
    } else if (rendered === 'job') {
      return savedApplications.length ? (
        <AppTable
          user_id={signedInUserId}
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
              setUserId(null);
              navigate('/');
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
