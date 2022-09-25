import React from 'react';
import BottomNav from '../../components/nav/bottom_nav';
import AppBar from '../../components/nav/app_bar';
import MyPageHistoryColumn from '../../components/my-page/mypage_column';
import { ButtonBase, Divider } from '@mui/material';
import styles from '../../styles/pages/setting/Setting.module.scss';
import Image from 'next/image';
import kakaoPlusBanner from '../../public/assets/kakao-plus-banner.png';
import { useRouter } from 'next/router';

const Setting = () => {
  const router = useRouter();
  // todo : 비밀번호 변경
  const goToSettingDetail = async () => {
    return await router.push('/setting/details');
  };

  const addKakaoChannel = () => {
    window.Kakao.Channel.addChannel({
      channelPublicId: '_zniRxj',
    });
    return;
  };

  const chatWithKakaoChannel = () => {
    window.Kakao.Channel.chat({
      channelPublicId: '_zniRxj',
    });

    return;
  };

  const updatePassword = () => {
    const refreshToken = localStorage.getItem(
      `${process.env.REFRESH_COOKIE_KEY}`
    );
    if (!refreshToken) {
      return router.push('/user');
    }

    return router.push('/user/update');
  };

  function openBuckitNotioinPage() {
    window.open('https://buckit.oopy.io/');
  }

  return (
    <div>
      <AppBar />
      <ButtonBase
        className={styles.kakao_banner_container}
        onClick={addKakaoChannel}
      >
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
        <MyPageHistoryColumn
          title={'비밀번호 재설정'}
          onClick={updatePassword}
        />
        <MyPageHistoryColumn title={'설정'} onClick={goToSettingDetail} />
      </div>
      <Divider sx={{ borderBottomWidth: '3px', borderColor: '#F9F9F9' }} />
      <div className={`${styles.column_container} ${styles.margin_for_bottom}`}>
        <div className={styles.title}>이용정보</div>
        <MyPageHistoryColumn
          title={'공지사항'}
          onClick={openBuckitNotioinPage}
        />
        <MyPageHistoryColumn
          title={'서비스 가이드'}
          onClick={openBuckitNotioinPage}
        />
        <MyPageHistoryColumn title={'FAQ'} onClick={openBuckitNotioinPage} />
        <MyPageHistoryColumn
          title={'1:1 문의하기'}
          onClick={chatWithKakaoChannel}
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default Setting;
