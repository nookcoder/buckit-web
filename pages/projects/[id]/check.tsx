import React from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import Image from 'next/image';
import styles from '../../../styles/pages/CheckingPurchase.module.scss';
import { Divider } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import UserCertificationInput from '../../../components/projects/user_certification_input';
import ProjectToggleInput from '../../../components/projects/toggle_input';

const CheckingPurchase = () => {
  return (
    <div>
      <AppBarWithBackArrow title={'사장되기'} />
      <main>
        <header className={styles.header}>
          <div className={styles.image_container}>
            {/*<Image*/}
            {/*  src={testThumbnail}*/}
            {/*  alt={'프로젝트 썸네일'}*/}
            {/*  layout={'fill'}*/}
            {/*/>*/}
          </div>
          <div className={styles.project_summary}>
            <div className={styles.project_location}>마포구 연남동 | 주점</div>
            <div className={styles.project_title}>
              2030 취향저격 만화 테마 주점
            </div>
            <div className={styles.project_progress}>
              <div className={styles.project_progress_text}>
                <span style={{ color: 'green' }}>7%</span> 달성 / 5억
              </div>
              <div className={styles.project_progress_text}>
                <span style={{ color: 'red' }}>30</span>일 남음
              </div>
            </div>
          </div>
        </header>

        <Divider variant={'fullWidth'} sx={{ marginTop: 3 }} />

        <section className={styles.certification_container}>
          <h3 className={styles.certification_title}>펀딩 당사자 정보 인증</h3>
          <UserCertificationInput title={'연락처'} />
          <UserCertificationInput title={'이메일'} />
        </section>

        <Divider variant={'fullWidth'} sx={{ marginTop: 3 }} />

        <section className={styles.total_container}>
          <h3 className={styles.total_title}>결재사항</h3>
          <div className={styles.total_box}>
            <div className={styles.total_text}>
              <span style={{ color: 'green' }}>최종 펀딩 금액</span>
            </div>
            <div className={styles.total_text}>125,000원</div>
          </div>
          <div>
            <div>
              <ProjectToggleInput title={'개인정보 제 3자 제공 동의'} />
              <ProjectToggleInput title={'펀딩 유의사항 확인'} />
            </div>
          </div>
        </section>

        <section className={styles.button_container}>
          <div className={styles.button_box}>
            <FullWidthButton variant={'contained'} text_color={'white'}>
              사장되기
            </FullWidthButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckingPurchase;
