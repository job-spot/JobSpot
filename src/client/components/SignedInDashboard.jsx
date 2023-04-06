import React, { useState } from 'react';
import AppTable from './AppTable';
import Applications from './Applications';
import styles from '../styles/App.module.css';
import logo from '../../assets/JOB-SPOT.png';
import '../styles.module.css';

function SignedInDash(props) {
  const [rendered, setRendered] = useState('job');

  const render = () => {
    if (rendered === 'add') {
      return <Applications userId={props.userId} />;
    } else if (rendered === 'job') {
      return <AppTable userId={props.userId} />;
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
