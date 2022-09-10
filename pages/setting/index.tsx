import React from 'react';
import BottomNav from '../../components/nav/bottom_nav';
import AppBar from '../../components/nav/app_bar';
import MyPageHistoryColumn from '../../components/my-page/mypage_column';
import { ButtonBase, Divider } from '@mui/material';
import styles from '../../styles/pages/setting/Setting.module.scss';
import Image from 'next/image';
import kakaoPlusBanner from '../../public/assets/kakao-plus-banner.png';

const Setting = () => {
  // todo : 카카오톡 플러스 친구 연결
  // todo : 비밀번호 변경
  // todo : notion 페이지 연결
  return (
    <div>
      <AppBar />
      <ButtonBase className={styles.kakao_banner_container}>
        <Image src={kakaoPlusBanner} alt={'카카오 플러스 친구 추가'} />
      </ButtonBase>
      <Divider
        sx={{
          borderBottomWidth: '3px',
          borderColor: '#F9F9F9',
        }}
      />
      <div className={styles.column_container}>
        <div className={styles.title}>계정</div>
        <MyPageHistoryColumn title={'내 정보'} />
        <MyPageHistoryColumn title={'비밀번호 재설정'} />
        <MyPageHistoryColumn title={'설정'} />
      </div>
      <Divider sx={{ borderBottomWidth: '3px', borderColor: '#F9F9F9' }} />
      <div className={`${styles.column_container} ${styles.margin_for_bottom}`}>
        <div className={styles.title}>이용정보</div>
        <MyPageHistoryColumn title={'공지사항'} />
        <MyPageHistoryColumn title={'서비스 가이드'} />
        <MyPageHistoryColumn title={'FAQ'} />
        <MyPageHistoryColumn title={'1:1 문의하기'} />
        <MyPageHistoryColumn title={'이용약관 및 정책'} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Setting;
