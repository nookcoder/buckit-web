import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { TextField } from '@mui/material';
import FullWidthButton from '../common/buttons/full_width_button';
import styles from '../../styles/components/projects/UserCertificationInput.module.scss';

interface UserCertificationInputProps {
  title: string;
  onClick: () => void;
  onChange: ChangeEventHandler<any>;
  input: {
    error: boolean;
    isCheck: boolean;
    value: string;
  };
}

const UserCertificationInput = ({
  title,
  onClick,
  onChange,
  input,
}: UserCertificationInputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <TextField
        value={input.value}
        className={styles.helper_text}
        error={input.error}
        helperText={input.error ? '가입된 정보와 일치하지 않습니다' : ''}
        size={'small'}
        color={'success'}
        fullWidth={true}
        onChange={onChange}
        disabled={input.isCheck}
        sx={{
          padding: '0 10px 0 0',
          input: { height: '20px' },
        }}
      />
      <div>
        <FullWidthButton
          variant={'contained'}
          text_color={'white'}
          onClick={onClick}
          padding={'7px 0'}
          disable={input.isCheck}
        >
          확인
        </FullWidthButton>
      </div>
    </div>
  );
};

export default UserCertificationInput;
