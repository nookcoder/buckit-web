import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/imageBuckitLogo.png';
import styles from '../../styles/pages/user/LoginHome.module.scss';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const LoginHome = () => {
  const router = useRouter();
  const goToLogin = async () => {
    await router.push('/user/login');
  };

  const goToSignUp = async () => {
    await router.push('/user/sign-up');
  };

  const goToUpdatePassword = async () => {
    await router.push('/user/update');
  };
  const goToHome = async () => {
    await router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image src={logo} alt={'로고'} layout={'responsive'} />
      </div>
      <div className={styles.login_home_dec}>
        지금 로그인 하고
        <br />
        새로운 프로젝트를 확인하세요
      </div>
      <div className={styles.buttons_container}>
        <FullWidthButton
          variant={'contained'}
          text_color={'white'}
          padding={'15px 0'}
          onClick={goToLogin}
        >
          로그인
        </FullWidthButton>
        <div className={styles.divider} />
        <FullWidthButton
          variant={'outlined'}
          text_color={'#4EB08B'}
          background_color={'white'}
          padding={'15px 0'}
          hover_color={'white'}
          onClick={goToSignUp}
        >
          회원가입
        </FullWidthButton>
        <div className={styles.divider} />
        <Button
          variant={'text'}
          sx={{ color: '#B9B9B9' }}
          onClick={goToUpdatePassword}
        >
          혹시 비밀번호를 잊으셨나요?
        </Button>
        <Button variant={'text'} sx={{ color: '#B9B9B9' }} onClick={goToHome}>
          로그인 없이 이용하기
        </Button>
      </div>
    </div>
  );
};

export default LoginHome;
