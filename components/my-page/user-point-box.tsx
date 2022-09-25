import React from 'react';
import styles from '../../styles/pages/my-page/Mypage.module.scss';

interface UserPointBoxProps {
  name: string;
  points: number;
}

const UserPointBox = ({ name, points }: UserPointBoxProps) => {
  return (
    <div className={styles.point_container}>
      <span>{name}님의 버킷 포인트</span>
      <div className={styles.point_footer}>
        <span>{points} B</span>
        {/*<div>*/}
        {/*  <Button*/}
        {/*    variant={'contained'}*/}
        {/*    sx={{*/}
        {/*      color: '#4EB08B',*/}
        {/*      backgroundColor: 'white',*/}
        {/*      '&:hover': {*/}
        {/*        backgroundColor: 'white',*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    출금*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default UserPointBox;
