import React, { useState } from 'react';
import { TextField } from '@mui/material';
import FullWidthButton from '../common/buttons/full_width_button';
import styles from '../../styles/components/projects/UserCertificationInput.module.scss';

interface UserCertificationInputProps {
  title: string;
  onClick?: () => void;
}

const UserCertificationInput = ({
  title,
  onClick,
}: UserCertificationInputProps) => {
  const [error, setError] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <TextField
        className={styles.helper_text}
        error={error}
        helperText={error ? '가입된 정보와 일치하지 않습니다' : ''}
        size={'small'}
        color={'success'}
        fullWidth={true}
        sx={{
          padding: '0 10px 0 0',
          input: { height: '20px' },
        }}
      />
      <div>
        <FullWidthButton
          variant={'contained'}
          textColor={'white'}
          onClick={onClick}
        >
          확인
        </FullWidthButton>
      </div>
    </div>
  );
};

export default UserCertificationInput;
