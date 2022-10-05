import React, { MouseEventHandler } from 'react';
import { Box, Button, Grid, styled } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from '../../../styles/components/common/KeyPad.module.scss';
import { SetterOrUpdater } from 'recoil';
import { BACK_SPACE, MAX_QTY } from '../../../recoil';

interface KeyPadProps {
  password?: boolean;
  max_button_disabled?: boolean;
  max_qty?: string;
  setQty?: React.Dispatch<React.SetStateAction<string>>;
  qty?: string;
  valueSelector?: [string, SetterOrUpdater<string>];
}

const KeyPad = ({
  password,
  max_button_disabled,
  valueSelector,
  max_qty,
  setQty,
  qty,
}: KeyPadProps) => {
  const gridProps = {
    justifyContent: 'space-around',
    container: true,
    item: true,
    spacing: 3,
  };
  let value: any, setValue: any;
  [value, setValue] = valueSelector ?? [];
  const onClickMaxButton = () => {
    if (!max_button_disabled && max_qty && setQty) {
      setQty(max_qty);
    }
  };

  return (
    <Box className={styles.container}>
      <Grid container spacing={1}>
        <Grid {...gridProps}>
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'1'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'2'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'3'}
            setValue={setQty ?? setValue}
          />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'4'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'5'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            qty={qty}
            maxQty={max_qty}
            isPassword={password}
            text={'6'}
            setValue={setQty ?? setValue}
          />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid
            qty={qty}
            maxQty={max_qty}
            isPassword={password}
            text={'7'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'8'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'9'}
            setValue={setQty ?? setValue}
          />
        </Grid>
        <Grid {...gridProps}>
          <KeyPadGrid
            qty={qty}
            maxQty={max_qty}
            isPassword={password}
            disabled={max_button_disabled}
            text={password ? '' : '최대'}
            setValue={onClickMaxButton}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={'0'}
            setValue={setQty ?? setValue}
          />
          <KeyPadGrid
            maxQty={max_qty}
            qty={qty}
            isPassword={password}
            text={<KeyboardBackspaceIcon />}
            setValue={setQty ?? setValue}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

interface KeyPadGridProps {
  text?: string | number | React.ReactNode;
  disabled?: boolean;
  setValue: SetterOrUpdater<any> | React.Dispatch<React.SetStateAction<string>>;
  isPassword: boolean | undefined;
  qty?: string;
  maxQty: string | undefined;
}

const KeyPadGrid = ({
  text,
  disabled,
  setValue,
  isPassword,
  qty,
  maxQty,
}: KeyPadGridProps) => {
  // todo : 로직 수정
  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (!isPassword) {
      if (typeof text === 'string') {
        if (maxQty === qty) {
          return;
        }

        if (qty === '0') {
          setValue(event.currentTarget.value);
          return;
        }

        const value = event.currentTarget.value;
        if (qty && maxQty && +(qty + value) >= +maxQty) {
          setValue(maxQty);
          return;
        }
        setValue(qty + value);
        return;
      }

      if (qty && qty.length > 1) {
        setValue(qty.substring(0, qty.length - 1));
        return;
      }

      setValue('0');
      return;
    }

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
