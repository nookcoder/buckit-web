import React from 'react';
import Logo from '../../public/assets/imageBuckitLogo.png';
import Image from 'next/image';
import styles from '../../styles/pages/ProjectPurchaseCompletion.module.scss';
import FullWidthButton from '../../components/common/buttons/full_width_button';

const Completion = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.image_container}>
          <Image src={Logo} alt={'로고'} />
        </div>
        <div style={{ color: '#4EB08B' }}>구매완료</div>
      </header>

      <section className={styles.middle}>
        <div className={styles.middle_header}>사장님</div>
        <div>프로젝트 펀딩이 완료되었어요! 🎉</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footer_title}>
          다른 프로젝트를 만나보시겠어요?
        </div>
        <div className={styles.button_container}>
          <FullWidthButton
            variant={'contained'}
            text_color={'white'}
            padding={'10px 0'}
          >
            다른 프로젝트 둘러보기
          </FullWidthButton>
        </div>
        <div className={styles.button_container}>
          <FullWidthButton
            variant={'contained'}
            text_color={'white'}
            padding={'10px 0'}
          >
            구매내역 확인하기
          </FullWidthButton>
        </div>
      </footer>
    </div>
  );
};

export default Completion;
