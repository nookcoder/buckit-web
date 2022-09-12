import React from 'react';
import { Box, Button, Grid, styled } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from '../../../styles/components/common/KeyPad.module.scss';

interface KeyPadProps {
  password?: boolean;
  max_button_disabled?: boolean;
}

const KeyPad = ({ password, max_button_disabled }: KeyPadProps) => {
  const gridProps = {
    justifyContent: 'space-around',
    container: true,
    item: true,
    spacing: 3,
  };
  return (
    <Box className={styles.container}>
      <Grid container spacing={1}>
        <Grid {...gridProps}>
          <KeyPadGrid text={'1'} />
          <KeyPadGrid text={'2'} />
          <KeyPadGrid text={'3'} />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid text={'4'} />
          <KeyPadGrid text={'5'} />
          <KeyPadGrid text={'6'} />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid text={'7'} />
          <KeyPadGrid text={'8'} />
          <KeyPadGrid text={'9'} />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid
            disabled={max_button_disabled}
            text={password ? '' : '최대'}
          />
          <KeyPadGrid text={'0'} />
          <KeyPadGrid text={<KeyboardBackspaceIcon />} />
        </Grid>
      </Grid>
    </Box>
  );
};

interface KeyPadGridProps {
  text?: string | number | React.ReactNode;
  disabled?: boolean;
}

const KeyPadGrid = ({ text, disabled }: KeyPadGridProps) => {
  return (
    <Grid
      paddingY={3}
      justifyContent="center"
      alignItems="center"
      textAlign={'center'}
      item
    >
      <CustomButton disabled={disabled}>{text}</CustomButton>
    </Grid>
  );
};

const CustomButton = styled(Button)(() => ({
  fontSize: '18px',
  color: 'black',
}));

export default KeyPad;
