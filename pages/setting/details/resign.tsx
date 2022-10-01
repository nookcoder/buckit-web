import React, { useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { IconButton } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { deleteUser } from '../../../api';
import { useRouter } from 'next/router';
import styles from '../../../styles/pages/setting/Setting.module.scss';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import AlertModal from '../../../components/common/modal/alert-modal';

const Resign = () => {
  const router = useRouter();
  const [isCheck1, setIsCheck1] = useState<boolean>(false);
  const [isCheck2, setIsCheck2] = useState<boolean>(false);
  const [isCheck3, setIsCheck3] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const resign = async () => {
    if (isCheck1 && isCheck2 && isCheck3) {
      localStorage.clear();
      const result = await deleteUser();
      if (result) {
        return router.push('/');
      }

      return;
    }

    setModal(true);
  };

  const toggleCheck1 = () => {
    setIsCheck1(!isCheck1);
  };

  const toggleCheck2 = () => {
    setIsCheck2(!isCheck2);
  };

  const toggleCheck3 = () => {
    setIsCheck3(!isCheck3);
  };

  return (
    <div>
      <AppBarWithBackArrow title={'회원탈퇴'} />
      <main className={styles.resign_container}>
        <h2>탈퇴 유의사항</h2>
        <div>
          <div className={styles.resign_description}>
            회원은 언제든 이용 계약을 해지할 수 있습니다. <br />
            단, 이미 구입한 쿼터는 회원탈퇴 이후에는 환불되지 않으며,
            <br /> 거치기간 이후 철회를 신청하여 예치금으로 환불된 금액을
            <br />
            회원탈퇴 신청 전에 출금해주셔야 합니다.
          </div>
          <div className={styles.resign_check_button}>
            <IconButton
              sx={{
                padding: 0,
              }}
              onClick={toggleCheck1}
            >
              {isCheck1 ? (
                <CircleIcon color={'success'} />
              ) : (
                <CircleOutlinedIcon />
              )}
            </IconButton>
            <span className={styles.resign_check_button_text}>
              확인했습니다
            </span>
          </div>
        </div>
        <div>
          <div className={styles.resign_description}>
            회원탈퇴는 구입한 쿼터, 잔여 예치금 등의 조회 절차를 위해 신청 후
            처리까지 영업일 기준 3일이 소요됩니다. 탈퇴가 처리되면
            일정기간(1개월) 이후 재가입이 가능합니다. 탈퇴한 회원의 개인정보는
            1년 동안 보관합니다. 아이디, 성명, 휴대전화번호, 이메일 등
          </div>
          <div className={styles.resign_check_button}>
            <IconButton
              sx={{
                padding: 0,
              }}
              onClick={toggleCheck2}
            >
              {isCheck2 ? (
                <CircleIcon color={'success'} />
              ) : (
                <CircleOutlinedIcon />
              )}
            </IconButton>
            <span className={styles.resign_check_button_text}>
              확인했습니다
            </span>
          </div>
        </div>
        <div>
          <div className={styles.resign_description}>
            이용계약이 해지되는 경우 이와 관련하여 발생하는 손해는 이용계약이
            종료된 해당 회원이 책임을 부담하며, 회사는 이를 책임지지 않습니다.
          </div>
          <div className={styles.resign_check_button}>
            <IconButton
              sx={{
                padding: 0,
              }}
              onClick={toggleCheck3}
            >
              {isCheck3 ? (
                <CircleIcon color={'success'} />
              ) : (
                <CircleOutlinedIcon />
              )}
            </IconButton>
            <span className={styles.resign_check_button_text}>
              확인했습니다
            </span>
          </div>
        </div>
        <FullWidthButton
          variant={'contained'}
          text_color={'white'}
          onClick={resign}
        >
          탈퇴 신청하기
        </FullWidthButton>
      </main>
      <AlertModal
        title={'모든 유의사항을 확인해주세요'}
        open={modal}
        setOpen={setModal}
      />
    </div>
  );
};

export default Resign;
