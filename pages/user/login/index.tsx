import React from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { TextField } from '@mui/material';
import styles from '../../../styles/pages/user/LoginId.module.scss';
import FullWidthButton from '../../../components/common/buttons/full_width_button';

const LoginId = () => {
  // todo : 휴대폰 번호 입력 Component
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
            다음(1/3)
          </FullWidthButton>
        </div>
      </main>
    </div>
  );
};

export default LoginId;
