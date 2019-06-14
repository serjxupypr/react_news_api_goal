import React from 'react';
import Loader from '../components/loader/Loader';

const LoaderHoc = ({ isLoading, children }) =>
  isLoading ? (
    <Loader/>
  ) : (
    children
);

export default LoaderHoc;