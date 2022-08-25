import React from 'react';
import BottomNav from '../../components/nav/bottom_nav';
import AppBar from '../../components/nav/app_bar';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import styles from '../../styles/pages/my-page/Mypage.module.scss';
import MyPageHistoryColumn from '../../components/my-page/mypage_column';

const MyPage = () => {
  return (
    <div>
      <AppBar />
      <main className={styles.container}>
        <section>
          <div className={styles.user_container}>
            <div className={styles.user_name}>
              <span>김현욱</span>
              <IconButton sx={{ padding: 0 }}>
                <EditIcon color={'success'} />
              </IconButton>
            </div>
            <div className={styles.user_extra_info_container}>
              <PhoneIphoneIcon color={'success'} fontSize={'small'} />
              <span>010-5047-7361</span>
            </div>
            <div className={styles.user_extra_info_container}>
              <EmailOutlinedIcon color={'success'} fontSize={'small'} />
              <span>gus5427@naver.com</span>
            </div>
          </div>

          <div className={styles.point_container}>
            <span>김현욱님의 버킷 포인트</span>
            <div className={styles.point_footer}>
              <span>3000 B</span>
              <div>
                <Button
                  variant={'contained'}
                  sx={{
                    color: '#4EB08B',
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                >
                  출금
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/*todo : 찜한 프로젝트 추가 예정*/}
        {/*<section>*/}
        {/*  <h3>찜한 프로젝트</h3>*/}
        {/*</section>*/}
        <section className={styles.history_container}>
          <h3>펀딩 내역</h3>
          <MyPageHistoryColumn title={'예약된 프로젝트'} />
          <MyPageHistoryColumn title={'영업 중인 프로젝트'} />
          <MyPageHistoryColumn title={'프로젝트 수익 내역'} />
        </section>
      </main>
      <BottomNav />
    </div>
  );
};

export default MyPage;
