import React, { useState } from 'react';
import styles from '../../styles/pages/my-page/Mypage.module.scss';
import { Button } from '@mui/material';
import AlertModal from '../common/modal/alert-modal';

interface UserPointBoxProps {
  name: string;
  points: number;
}

const UserPointBox = ({ name, points }: UserPointBoxProps) => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(true);
  };
  return (
    <div className={styles.point_container}>
      <span>{name}님의 버킷 포인트</span>
      <div className={styles.point_footer}>
        <span>{points} B</span>
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
            onClick={onClick}
          >
            출금
          </Button>
        </div>
      </div>
      <AlertModal
        title={'출금할 수 있는 금액이 부족합니다'}
        open={modal}
        setOpen={setModal}
      />
    </div>
  );
};

export default UserPointBox;
