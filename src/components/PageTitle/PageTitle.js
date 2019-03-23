import React from 'react';
import styles from './PageTitle.module.scss';

const { title } = styles;

const PageTitle = ({ children }) => {
  return <h1 className={title}>{children}</h1>;
};

export default PageTitle;
