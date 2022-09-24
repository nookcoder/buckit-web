import React from 'react';
import { LinearProgress, styled } from '@mui/material';

interface BorderLinearProgressProps {
  thickness: number;
  border_radius: number;
}

interface CustomLinearProgressProps {
  value: number;
  thickness: number;
  border_radius: number;
}

const BorderLinearProgress = styled(LinearProgress)(
  (props: BorderLinearProgressProps) => ({
    height: props.thickness,
    borderRadius: props.border_radius,
  })
);

const CustomLinearProgress = (props: CustomLinearProgressProps) => {
  return (
    <div>
      <BorderLinearProgress
        thickness={props.thickness}
        border_radius={props.border_radius}
        color={'success'}
        value={props.value}
        variant={'determinate'}
      />
    </div>
  );
};

export default CustomLinearProgress;
