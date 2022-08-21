import React from 'react';
import { LinearProgress, styled } from '@mui/material';

interface BorderLinearProgressProps {
  thickness: number;
  borderRadius: number;
}

interface CustomLinearProgressProps {
  value: number;
  thickness: number;
  borderRadius: number;
}

const BorderLinearProgress = styled(LinearProgress)(
  (props: BorderLinearProgressProps) => ({
    height: props.thickness,
    borderRadius: props.borderRadius,
  })
);

const CustomLinearProgress = (props: CustomLinearProgressProps) => {
  return (
    <div>
      <BorderLinearProgress
        thickness={props.thickness}
        borderRadius={props.borderRadius}
        color={'success'}
        value={props.value}
        variant={'determinate'}
      />
    </div>
  );
};

export default CustomLinearProgress;
