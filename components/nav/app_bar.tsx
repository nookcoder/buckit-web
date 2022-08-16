import React from 'react';
import appbarStyles from '../../styles/nav/AppBar.module.scss';
import Image from 'next/image';
import icon from '../../public/assets/appbar_logo.png';
import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useRouter } from 'next/router';

const AppBar = () => {
  const router = useRouter();
  const goToHome = (): Promise<boolean> => {
    return router.push('/');
  };
  return (
    <div className={appbarStyles.container}>
      <div className={appbarStyles.logo_box}>
        <Image
          id={appbarStyles.logo}
          src={icon}
          alt={'로고'}
          layout={'fill'}
          onClick={goToHome}
        />
      </div>
      <IconButton aria-label={'알림'}>
        <NotificationsNoneIcon />
      </IconButton>
    </div>
  );
};

export default AppBar;
