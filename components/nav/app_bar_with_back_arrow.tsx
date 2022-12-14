import React from 'react';
import appbarStyles from '../../styles/nav/AppBar.module.scss';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useRouter } from 'next/router';

interface AppBarWithBackArrowProps {
  title?: string;
  onClick?: any;
}

const AppBarWithBackArrow = ({ title, onClick }: AppBarWithBackArrowProps) => {
  const router = useRouter();
  const goBack: React.MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };
  return (
    <>
      <div className={appbarStyles.container}>
        <IconButton onClick={onClick ? onClick : goBack}>
          <NavigateBeforeIcon fontSize={'large'} />
        </IconButton>

        <h3>{title}</h3>

        <div className={appbarStyles.box}></div>
      </div>
      <div className={appbarStyles.blank_box}></div>
    </>
  );
};

export default AppBarWithBackArrow;
