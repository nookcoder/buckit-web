import React, { CSSProperties, useState } from 'react';
import Image from 'next/image';
import test from '../../public/assets/banner.png';
import { withComma } from '../../utils';
import { MyOrder } from '../../models/model/order';
import styles from '../../styles/components/my-page/MyProjectBox.module.scss';
import { ButtonBase, styled } from '@mui/material';
import OkModal from '../common/modal/ok-modal';

interface BeforePaymentProjectBoxProps {
  index: number;
  style: CSSProperties;
  order: MyOrder;
}

const BeforePaymentProjectBox = ({
  index,
  style,
  order,
}: BeforePaymentProjectBoxProps) => {
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
    <div key={index} style={style}>
      <div className={styles.order_code}>
        주문 코드 {order.get().order_code}
      </div>

      <div className={styles.order_content}>
        <div className={styles.order_thumbnail} aria-label={'thumbnail'}>
          <Image
            alt={'프로젝트 썸네일'}
            src={order.get().project.thumbnailImage}
            layout={'fill'}
            className={styles.auto_image}
          />
        </div>
        <div className={styles.mobile_font_size} aria-label={'content'}>
          <div className={styles.order_title}>{order.get().project.title}</div>
          <div className={styles.order_content_col}>
            총 블럭 수 : {withComma(order.get().quarter_qty.toString())}개
          </div>
          <div className={styles.order_content_col}>
            <span className={styles.order_price}>
              총 금액 : {withComma(order.get().total_price.toString())}원{' '}
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.order_date} ${styles.order_footer}`}>
        <div className={styles.order_footer_title}>입금 마감일</div>
        <div>{order.getRemainingTime()}</div>
      </div>
      <div className={styles.order_footer}>
        <div className={styles.order_footer_title}>은행</div>
        <div>KB 국민은행</div>
      </div>
      <div className={styles.order_footer}>
        <div className={styles.order_footer_title}>예금주명</div>
        <div>(주)버닝 서프라이즈</div>
      </div>
      <div className={styles.order_footer}>
        <div className={styles.order_footer_title}>계좌번호</div>
        <div>
          012501-04-322726 <OkButton onClick={copyAccount}>복사</OkButton>
        </div>
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

export default BeforePaymentProjectBox;
