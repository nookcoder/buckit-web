import React from 'react';
import styles from '../../../styles/pages/user/Completion.module.scss';
import Image from 'next/image';
import logo from '../../../public/assets/imageBuckitLogo.png';
import FullWidthButton from '../../../components/common/buttons/full_width_button';

const Completion = () => {
  return (
    <div className={styles.container}>
      <section className={styles.image_container}>
        <Image src={logo} alt={'로고'} layout={'responsive'} />
      </section>

      <section className={styles.upper_container}>
        <span>
          <div style={{ fontSize: '25px', marginBottom: '10px' }}>사장님</div>
          버킷에 오신 것을 진심으로 환영합니다.
        </span>
      </section>

      <section className={styles.lower_container}>
        <span>
          그럼 사장님을 기다리는 <br />
          프로젝트를 만나러 가볼까요?
        </span>

        <div className={styles.button_container}>
          <FullWidthButton
            variant={'contained'}
            text_color={'white'}
            padding={'15px 0'}
          >
            시작하기
          </FullWidthButton>
        </div>
      </section>
    </div>
  );
};

export default Completion;
