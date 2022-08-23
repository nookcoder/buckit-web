import React from 'react';
import { Button, styled } from '@mui/material';

interface CustomButtonProps {
  variant: 'text' | 'outlined' | 'contained' | undefined;
  backgroundColor?: string | undefined;
  textColor: string;
  hoverColor?: string | undefined;
  activeColor?: string | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}
const CustomButton = styled(Button)((props: CustomButtonProps) => ({
  backgroundColor: props.backgroundColor ?? '#4EB08B',
  color: props.textColor,
  '&:hover': {
    backgroundColor: props.hoverColor ?? '#4EB08B',
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
        onClick={props.onClick}
      >
        {props.children}
      </CustomButton>
    </>
  );
};

export default FullWidthButton;
