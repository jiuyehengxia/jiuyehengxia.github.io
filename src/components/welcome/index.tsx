import React from 'react';
import './animation.css';

import styles from './index.module.scss';

const Welcome: React.FC = () => {
  return (
    <div className={styles['welcome-out-wrap']}>
      <div className="single-text left-top-text">欢</div>
      <div className="single-text left-bottom-text">迎</div>
      <div className="single-text right-top-text">光</div>
      <div className="single-text right-bottom-text">临</div>
    </div>
  );
};

export default Welcome;
