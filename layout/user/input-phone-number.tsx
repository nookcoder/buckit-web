import React from 'react';
import styles from '../../styles/layout/user/InputPhoneNumber.module.scss';
import AppBarWithBackArrow from '../../components/nav/app_bar_with_back_arrow';
import { TextField } from '@mui/material';
import FullWidthButton from '../../components/common/buttons/full_width_button';

interface InputPhoneNumberProps {
  buttonText: string;
}

// todo : 휴대폰 번호 정규식 처리

const InputPhoneNumber = ({ buttonText }: InputPhoneNumberProps) => {
  return (
    <div className={styles.container}>
      <AppBarWithBackArrow />
      <main className={styles.main_container}>
        <div className={styles.title_container}>
          <div className={styles.title}>휴대폰 번호를 입력해주세요</div>
          <TextField
            variant={'standard'}
            placeholder={'- 없이 입력'}
            fullWidth={true}
            color={'success'}
            sx={{
              input: {
                textAlign: 'center',
                fontSize: '20px',
              },
            }}
          />
        </div>
        <div className={styles.footer}>
          <FullWidthButton
            variant={'contained'}
            text_color={'white'}
            padding={'15px 0'}
          >
            {buttonText}
          </FullWidthButton>
        </div>
      </main>
    </div>
  );
};

export default InputPhoneNumber;
