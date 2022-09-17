import React, { MouseEventHandler } from 'react';
import { Box, Button, Grid, styled } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from '../../../styles/components/common/KeyPad.module.scss';
import { SetterOrUpdater } from 'recoil';
import { BACK_SPACE } from '../../../recoil';

interface KeyPadProps {
  password?: boolean;
  max_button_disabled?: boolean;
  valueSelector: [string, SetterOrUpdater<string>];
}

const KeyPad = ({
  password,
  max_button_disabled,
  valueSelector,
}: KeyPadProps) => {
  const gridProps = {
    justifyContent: 'space-around',
    container: true,
    item: true,
    spacing: 3,
  };
  const [value, setValue] = valueSelector;

  return (
    <Box className={styles.container}>
      <Grid container spacing={1}>
        <Grid {...gridProps}>
          <KeyPadGrid text={'1'} setValue={setValue} />
          <KeyPadGrid text={'2'} setValue={setValue} />
          <KeyPadGrid text={'3'} setValue={setValue} />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid text={'4'} setValue={setValue} />
          <KeyPadGrid text={'5'} setValue={setValue} />
          <KeyPadGrid text={'6'} setValue={setValue} />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid text={'7'} setValue={setValue} />
          <KeyPadGrid text={'8'} setValue={setValue} />
          <KeyPadGrid text={'9'} setValue={setValue} />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid
            disabled={max_button_disabled}
            text={password ? '' : '최대'}
            setValue={setValue}
          />
          <KeyPadGrid text={'0'} setValue={setValue} />
          <KeyPadGrid text={<KeyboardBackspaceIcon />} setValue={setValue} />
        </Grid>
      </Grid>
    </Box>
  );
};

interface KeyPadGridProps {
  text?: string | number | React.ReactNode;
  disabled?: boolean;
  setValue: SetterOrUpdater<any>;
}

const KeyPadGrid = ({ text, disabled, setValue }: KeyPadGridProps) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (typeof text == 'string' || typeof text == 'number') {
      const value = event.currentTarget.value;
      setValue(value);
    } else {
      setValue(BACK_SPACE);
    }
  };

  return (
    <Grid
      paddingY={3}
      justifyContent="center"
      alignItems="center"
      textAlign={'center'}
      item
    >
      <CustomButton
        disabled={disabled}
        onClick={onClick}
        value={text !== null && typeof text == 'string' ? text : undefined}
      >
        {text}
      </CustomButton>
    </Grid>
  );
};

const CustomButton = styled(Button)(() => ({
  fontSize: '18px',
  color: 'black',
}));

export default KeyPad;
