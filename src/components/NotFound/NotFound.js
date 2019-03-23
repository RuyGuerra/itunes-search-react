import React from 'react';
import styles from './NotFound.module.scss';

const { container } = styles;

const NotFound = () => {
  return (
    <div className={container}>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
