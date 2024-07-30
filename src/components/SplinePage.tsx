

import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './SplinePage.module.css';

const SplinePage = () => {

 

  return (
    <div className={styles.container} >
      <Spline 
        scene="https://prod.spline.design/bWkbkNtGDi0PMnM4/scene.splinecode"
        className={styles.spline}
      />
    </div>
  );
}

export default SplinePage;
