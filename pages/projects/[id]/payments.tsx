import React, { useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { IconButton, Select, SelectChangeEvent } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import styles from '../../../styles/pages/Payments.module.scss';
import BankSelect from '../../../components/projects/payments/bank-select';
import BuyerName from '../../../components/projects/payments/buyer-name';
import PurchaseNotes from '../../../components/projects/payments/purchase-notes';

const Payments = () => {
  const [bank, setBank] = useState<string>('');
  const [name, setName] = useState<string>('');

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
        <FullWidthButton variant={'contained'} text_color={'white'}>
          확인
        </FullWidthButton>
      </div>
    </div>
  );
};

export default Payments;
