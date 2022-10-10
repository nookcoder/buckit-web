import React, { MouseEventHandler, useState } from 'react';
import AppBarWithBackArrow from '../../components/nav/app_bar_with_back_arrow';
import styles from '../../styles/layout/payments/PaymentsLayout.module.scss';
import { ButtonBase, Divider, styled } from '@mui/material';
import PurchaseNotes from '../../components/projects/payments/purchase-notes';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import OkModal from '../../components/common/modal/ok-modal';
import { useRecoilState } from 'recoil';
import { OrderInputAtom } from '../../interface';
import { orderAtom } from '../../recoil';

interface PaymentsLayoutProps {
  onClick: any;
}

const PaymentsLayout = ({ onClick }: PaymentsLayoutProps) => {
  const [orderInput, setOrderInput] = useRecoilState<OrderInputAtom>(orderAtom);
  const [okModal, setOkModal] = useState(false);

  const copyAccount = () => {
    const temp = document.createElement('textarea');
    temp.value = '012501-04-322726';
    document.body.appendChild(temp);

    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);

    setOkModal(true);
  };
  return (
    <div>
      <AppBarWithBackArrow title={'결제 하기'} />
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_title}>입금 은행</div>
          <div>KB 국민은행</div>
        </div>

        <div className={styles.content}>
          <div className={styles.content_title}>예금주명</div>
          <div>(주) 버닝 서프라이즈</div>
        </div>

        <div className={styles.content}>
          <div className={styles.content_title}>입금 계좌번호</div>
          <div className={styles.content_account}>
            <span>012501-04-322726</span>
            <OkButton onClick={copyAccount}>복사</OkButton>
          </div>
        </div>

        <Divider className={styles.divider} />

        <div className={styles.content_total}>
          <div className={styles.content_title}>입금할 금액</div>
          <div className={styles.total}>
            {orderInput.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </div>
        </div>

        <PurchaseNotes />
      </main>
      <div className={styles.button_container}>
        <FullWidthButton
          variant={'contained'}
          text_color={'white'}
          onClick={onClick}
        >
          확인
        </FullWidthButton>
      </div>
      <OkModal
        title={'클립보드에 복사되었습니다'}
        open={okModal}
        setOpen={setOkModal}
      />
    </div>
  );
};

const OkButton = styled(ButtonBase)(({ theme }) => ({
  color: 'white',
  background: '#4EB08B',
  padding: '5px 10px',
  borderRadius: '5px',
  marginLeft: '5px',
  boxShadow: '1px 1px #6GB08B',
}));

export default PaymentsLayout;
