import React from 'react';
import { Button, styled } from '@mui/material';

interface CustomButtonProps {
  variant: 'text' | 'outlined' | 'contained' | undefined;
  background_color?: string | undefined;
  text_color: string;
  hover_color?: string | undefined;
  active_color?: string | undefined;
  padding?: string | number;
  children: React.ReactNode;
  onClick?: () => void;
  disable?: boolean;
}
const CustomButton = styled(Button)((props: CustomButtonProps) => ({
  backgroundColor: props.disable ? 'grey' : props.background_color ?? '#4EB08B',
  color: props.disable ? '#C9C9C9' : props.text_color,
  padding: props.padding ?? '15px 0',
  borderColor: '#4EB08B',
  '&:hover': {
    backgroundColor: props.hover_color ?? '#4EB08B',
    borderColor: '#4EB08B',
  },
}));

const FullWidthButton = (props: CustomButtonProps) => {
  return (
    <>
      <CustomButton
        variant={props.variant}
        background_color={props.background_color}
        text_color={props.text_color}
        fullWidth={true}
        padding={props.padding}
        hover_color={props.hover_color}
        active_color={props.active_color}
        onClick={props.onClick}
        disable={props.disable}
      >
        {props.children}
      </CustomButton>
    </>
  );
};

export default FullWidthButton;
