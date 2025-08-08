import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children }) => {
  return (
    <>
      <Button
        variant='contained'
        sx={{ mt: '200px', bgcolor: 'red', '&:hover': { bgcolor: 'blue' } }}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
