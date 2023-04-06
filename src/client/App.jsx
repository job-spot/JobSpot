import * as React from 'react';
import { useState } from 'react';
import logo from '../assets/JOB-SPOT.png';
import MainDashboard from './components/MainDashboard';
import './styles.module.css';
import styles from './styles/App.module.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedInDashboard from './components/SignedInDashboard';

function App() {
  const [rendered, setRendered] = useState('dashboard');
  const [userId, setUserId] = useState(null);

  const render = () => {
    if (rendered === 'signup') {
      return <Signup setUserId={setUserId} setRendered={setRendered} />;
    } else if (rendered === 'signin') {
      return <Signin setUserId={setUserId} setRendered={setRendered} />;
    } else if (rendered === 'dashboard') {
      return <MainDashboard />;
    } else if (rendered === 'signedIndashboard') {
      return (
        <SignedInDashboard
          userId={userId}
          setUserId={setUserId}
          setRendered={setRendered}
        />
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
          <button onClick={() => setRendered('dashboard')}>HOME</button>
          <text>|</text>
          <button onClick={() => setRendered('signup')}>SIGN UP</button>
          <text>|</text>
          <button onClick={() => setRendered('signin')}>SIGN IN</button>
        </div>
      </div>
      <div className={styles.rendered}>{render()}</div>
    </div>
  );
}

export default App;
