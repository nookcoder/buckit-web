import React from 'react';
import styles from '../../../styles/pages/user/Terms.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import logo from '../../../public/assets/imageBuckitLogo.png';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import FullWidthButton from '../../../components/common/buttons/full_width_button';

const Terms = () => {
  // todo : 약관 동의 페이지 연결
  // todo : 약관 상태값 관리하기
  const TermsColumnComponent = (title: string, arrowVisible: boolean) => (
    <div className={styles.terms_column}>
      <div>
        <IconButton
          sx={{
            padding: '0',
          }}
        >
          <CircleOutlinedIcon />
        </IconButton>
        <span className={styles.terms_column_title}>{title}</span>
      </div>
      {arrowVisible ? (
        <IconButton>
          <ChevronRightOutlinedIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </div>
  );
  return (
    <div>
      <AppBarWithBackArrow />
      <main className={styles.main_container}>
        <section className={styles.image_container}>
          <Image src={logo} alt={'로고'} layout={'responsive'} />
        </section>

        <section className={styles.guide_text}>
          사장님! 이제 거의 끝났어요
          <br />곧 회원가입이 완료됩니다 :)
        </section>

        <section className={styles.terms_container}>
          <div className={styles.terms_title}>약관에 동의해주세요</div>

          <div className={styles.terms_column_container}>
            <div className={styles.all_agree}>
              {TermsColumnComponent('모두 동의합니다', false)}
            </div>
            {TermsColumnComponent('(필수)서비스이용약관', true)}
            {TermsColumnComponent('(필수)개인정보 처리방침', true)}
            {TermsColumnComponent('(선택)마케팅 활용 정보 제공', true)}
          </div>

          <div className={styles.button_container}>
            <FullWidthButton
              variant={'contained'}
              text_color={'white'}
              padding={'15px 0'}
            >
              다음
            </FullWidthButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Terms;
