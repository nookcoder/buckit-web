import React from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import styles from '../../../styles/pages/Payments.module.scss';

const Payments = () => {
  return (
    <div>
      <AppBarWithBackArrow />
      <main className={styles.container}>
        <div className={styles.title_container}>
          <h1>구매완료 마지막 단계!</h1>
          <div style={{ textAlign: 'center' }}>
            쿼터 구매 예약이 완료되었어요.
            <br />
            3시간 내에 가상계좌로 입금하셔야
            <br />
            구매가 완료됩니다:)
          </div>
        </div>
        <div className={styles.title_container}>
          <h2>사장님의 가상계좌는요</h2>
          <div>
            국민은행 605079-58-605489{' '}
            <IconButton>
              <ContentCopyIcon />
            </IconButton>
          </div>
        </div>
        <div className={styles.title_container}>
          <div className={styles.completion_title}>입금을 완료하셨나요?</div>
          <div className={styles.button_container}>
            <FullWidthButton
              variant={'contained'}
              text_color={'white'}
              padding={'10px 0'}
            >
              이어서 구매 진행하기
            </FullWidthButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payments;
