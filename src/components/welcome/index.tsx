import React from 'react';
import './animation.css';

import styles from './index.module.scss';

const Welcome: React.FC = () => {
  return (
    <div className={styles['welcome-out-wrap']}>
      <div className="single-text left-top-text">test1</div>
      <div className="single-text right-top-text">test3</div>
      <div className="single-text left-bottom-text">test2</div>
      <div className="single-text right-bottom-text">test4</div>
    </div>
  );
};

export default Welcome;
