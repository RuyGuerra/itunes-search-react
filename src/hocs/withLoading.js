import React from 'react';
import Spinner from '../components/Spinner/Spinner';

const withSpinner = WrappedComponent => ({
  isFetching,
  children,
  ...props
}) => {
  console.log('isFetching: ', isFetching);
  if (isFetching) {
    return <Spinner />;
  }
  return <WrappedComponent {...props}>{children}</WrappedComponent>;
};

export default withSpinner;
