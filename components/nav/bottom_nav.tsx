import React from 'react';
import { Icon, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from '../../styles/nav/BottomNav.module.scss';
import { useRouter } from 'next/router';

const BottomNav = () => {
  const router = useRouter();
  const moveToHome: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    await router.push('/');
  };
  const moveToProjects: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    await router.push('/projects');
  };
  const moveToMyPage: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    await router.push('/my-page');
  };
  const moveToSetting: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    await router.push('/setting');
  };
  return (
    <div className={`${styles.container} ${styles.fix}`}>
      <IconButton aria-label={'home'} onClick={moveToHome}>
        <HomeIcon />
      </IconButton>
      <IconButton aria-label={'projects'} onClick={moveToProjects}>
        <PaidIcon />
      </IconButton>
      <IconButton aria-label={'my-page'} onClick={moveToMyPage}>
        <PersonIcon />
      </IconButton>
      <IconButton aria-label={'setting'} onClick={moveToSetting}>
        <MoreHorizIcon />
      </IconButton>
    </div>
  );
};

export default BottomNav;
