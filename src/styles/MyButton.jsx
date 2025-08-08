import React from 'react';
import { Button, styled } from '@mui/material';

// const StyledButton = styled(Button)`
//   background-color: black;
//   color: wheat;
// `;

const StyledButton = styled(Button)((props) => {
  return {
    backgroundColor: props.c,
    color: 'white',
  };
});

const MyButton = ({ children }) => {
  return (
    <>
      <StyledButton c='orange'>{children}</StyledButton>
      <StyledButton disableRipple={true} size='small'>
        {children}
      </StyledButton>
    </>
  );
};

export default MyButton;
