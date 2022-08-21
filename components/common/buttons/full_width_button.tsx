import React from 'react';
import { Button, styled } from '@mui/material';

interface CustomButtonProps {
  variant: 'text' | 'outlined' | 'contained' | undefined;
  backgroundColor: string;
  textColor: string;
  hoverColor?: string | undefined;
  activeColor?: string | undefined;
  children: React.ReactNode;
}
const CustomButton = styled(Button)((props: CustomButtonProps) => ({
  backgroundColor: props.backgroundColor,
  color: props.textColor,
  '&:hover': {
    backgroundColor: props.hoverColor ?? undefined,
  },
}));

const FullWidthButton = (props: CustomButtonProps) => {
  return (
    <>
      <CustomButton
        variant={props.variant}
        backgroundColor={props.backgroundColor}
        textColor={props.textColor}
        fullWidth={true}
        hoverColor={props.hoverColor}
        activeColor={props.activeColor}
      >
        {props.children}
      </CustomButton>
    </>
  );
};

export default FullWidthButton;
