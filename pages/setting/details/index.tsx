import React from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import MyPageHistoryColumn from '../../../components/my-page/mypage_column';
import styles from '../../../styles/pages/setting/Setting.module.scss';
import { Divider } from '@mui/material';

const SettingDetail = () => {
  return (
    <div>
      <AppBarWithBackArrow title={'설정'} />
      <div className={styles.column_container}>
        <div className={styles.title}>알림</div>
        <MyPageHistoryColumn title={'알림 설정'} />
      </div>

      <Divider
        sx={{
          borderBottomWidth: '3px',
          borderColor: '#F9F9F9',
        }}
      />

      <div className={styles.column_container}>
        <div className={styles.title}>기타</div>
        <MyPageHistoryColumn title={'이용약관 및 정책'} />
        <MyPageHistoryColumn title={'회사 소개'} />
        <MyPageHistoryColumn title={'로그아웃'} />
        <MyPageHistoryColumn title={'회원탈퇴'} />
      </div>
      <div></div>
    </div>
  );
};

export default SettingDetail;
