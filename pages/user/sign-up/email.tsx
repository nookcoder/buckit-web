import React from 'react';
import styles from '../../../styles/layout/user/InputPhoneNumber.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { TextField } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';

const Email = () => {
  // todo : 휴대폰 인증 코드 받았는 지 확인하기
  // todo : 이메일 정규식 추가
  return (
    <div className={styles.container}>
      <AppBarWithBackArrow />
      <main className={styles.main_container}>
        <div className={styles.title_container}>
          <div className={styles.title}>이메일을 입력해주세요</div>
          <TextField
            variant={'standard'}
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
            다음
          </FullWidthButton>
        </div>
      </main>
    </div>
  );
};

export default Email;
