import React, { useEffect, useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import MyPageHistoryColumn from '../../../components/my-page/mypage_column';
import styles from '../../../styles/pages/setting/Setting.module.scss';
import { Divider } from '@mui/material';
import { TERM_PRIVACY, TERM_SERVICE } from '../../../constants';
import { TERM_PURCHASE } from '../../../constants/page-url /terms';
import { useRouter } from 'next/router';

const SettingDetail = () => {
  const router = useRouter();
  const [refreshToken, setRefreshToken] = useState<string | null>();

  const goToServiceTerm = () => {
    window.location.href = TERM_SERVICE;
  };
  const goToPrivacyTerm = () => {
    window.location.href = TERM_PRIVACY;
  };
  const goToPurchaseTerm = () => {
    window.location.href = TERM_PURCHASE;
  };

  const goToLoginPage = () => {
    return router.push('/user');
  };

  const goToBuckitNotion = () => {
    window.location.href = 'https://buckit.oopy.io';
  };

  const logout = () => {
    localStorage.clear();
    return router.push('/user');
  };

  useEffect(() => {
    const token = localStorage.getItem(`${process.env.REFRESH_COOKIE_KEY}`);
    setRefreshToken(token);
  }, []);

  return (
    <div>
      <AppBarWithBackArrow title={'설정'} />
      {/*<div className={styles.column_container}>*/}
      {/*  <div className={styles.title}>알림</div>*/}
      {/*  <MyPageHistoryColumn title={'알림 설정'} />*/}
      {/*</div>*/}

      {/*<Divider*/}
      {/*  sx={{*/}
      {/*    borderBottomWidth: '3px',*/}
      {/*    borderColor: '#F9F9F9',*/}
      {/*  }}*/}
      {/*/>*/}

      <div className={styles.column_container}>
        <div className={styles.title}>기타</div>
        <MyPageHistoryColumn
          title={'이용약관 및 정책'}
          onClick={goToServiceTerm}
        />
        <MyPageHistoryColumn
          title={'개인정보 처리방침'}
          onClick={goToPrivacyTerm}
        />
        <MyPageHistoryColumn title={'구매약관'} onClick={goToPurchaseTerm} />
        <MyPageHistoryColumn title={'회사 소개'} onClick={goToBuckitNotion} />
        <MyPageHistoryColumn
          title={refreshToken ? '로그아웃' : '로그인'}
          onClick={refreshToken ? logout : goToLoginPage}
        />
        {refreshToken ? <MyPageHistoryColumn title={'회원탈퇴'} /> : <></>}
      </div>
      <div></div>
    </div>
  );
};

export default SettingDetail;
