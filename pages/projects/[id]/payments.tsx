import React, { useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { IconButton, Select, SelectChangeEvent } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import styles from '../../../styles/pages/Payments.module.scss';
import BankSelect from '../../../components/projects/payments/bank-select';
import BuyerName from '../../../components/projects/payments/buyer-name';
import PurchaseNotes from '../../../components/projects/payments/purchase-notes';
import { useRecoilState } from 'recoil';
import { OrderInputAtom } from '../../../interface';
import { orderAtom } from '../../../recoil';
import { useRouter } from 'next/router';
import AlertModal from '../../../components/common/modal/alert-modal';

const Payments = () => {
  const router = useRouter();
  const [bank, setBank] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [orderInput, setOrderInput] = useRecoilState<OrderInputAtom>(orderAtom);
  const [bankModal, setBankModal] = useState(false);
  const [nameModal, setNameModal] = useState(false);

  const onClick = () => {
    if (!bank) {
      setBankModal(true);
      return;
    }

    if (!name || name.length <= 1) {
      setNameModal(true);
      return;
    }

    setOrderInput({
      ...orderInput,
      buyer_bank: bank,
      buyer_name: name,
    });

    router.push('/projects/completion');
  };
  return (
    <div>
      <AppBarWithBackArrow title={'결제하기'} />
      <main className={styles.container}>
        <h3 className={styles.title}>구매자 정보 입력</h3>
        <BankSelect value={bank} setValue={setBank} />
        <BuyerName value={name} setValue={setName} />
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

      <AlertModal
        title={'은행을 선택해주세요'}
        open={bankModal}
        setOpen={setBankModal}
      />
      <AlertModal
        title={'정확한 이름을 입력해주세요'}
        open={nameModal}
        setOpen={setNameModal}
      />
    </div>
  );
};

export default Payments;
