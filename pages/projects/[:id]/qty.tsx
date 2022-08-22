import React from 'react';
import styles from '../../../styles/pages/ProjectQty.module.scss';
import KeyPad from '../../../components/common/key-pad/key_pad';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import Image from 'next/image';
import marketImage from '../../../public/assets/buy.png';
import { TextField } from '@mui/material';
import ProductViewModel from '../../../models/view-model/product';
import FullWidthButton from '../../../components/common/buttons/full_width_button';

interface QtyProps {
  projectViewModel: ProductViewModel;
}

const Qty = () => {
  // const project = projectViewModel.get();

  return (
    <div>
      <AppBarWithBackArrow />

      <main className={styles.container}>
        <div className={styles.header}>
          <div className={`${styles.align_center} ${styles.project_title}`}>
            2030 취향저격 만화주점 카페
          </div>
          <div className={`${styles.align_center}`}>
            <Image
              src={marketImage}
              alt={'아이콘'}
              width={78}
              height={78}
              layout={'fixed'}
            />
          </div>
          <div className={`${styles.align_center} ${styles.project_qty_info}`}>
            1쿼터 = 125,000원
          </div>
          <div className={`${styles.align_center} ${styles.project_qty_info}`}>
            최대 펀딩 가능 쿼터 = 40개
          </div>
        </div>

        <div>
          <div className={`${styles.align_center}`}>
            몇 쿼터를 구매하시겠어요?
          </div>
          <div className={`${styles.align_center}`}>
            <TextField
              sx={{ input: { textAlign: 'center' } }}
              color={'success'}
              disabled={false}
              variant={'standard'}
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <KeyPad />
          <div className={styles.button_container}>
            <FullWidthButton variant={'contained'} textColor={'white'}>
              사장되기
            </FullWidthButton>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Qty;
