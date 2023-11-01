import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <CircularProgress color="primary" />
    </div>
  );
};

export default Spinner;