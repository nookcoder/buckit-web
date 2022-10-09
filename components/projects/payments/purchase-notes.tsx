import React from 'react';
import styles from '../../../styles/components/projects/payments/Payments.module.scss';

const PurchaseNotes = () => {
  return (
    <div className={styles.purchase_notes_container}>
      <div className={styles.purchase_notes_title}>결제 전 꼭 알아두세요!</div>
      <div className={styles.purchase_notes_content}>
        <div>• </div>
        <div>
          입금 후 은행에 따라 3시간 이내에 입금 확인되며 <br />
          입금 확인 후 알림톡과 함께 구매가 완료됩니다.
        </div>
      </div>
      <div className={styles.purchase_notes_content}>
        <div>• </div>
        <div>결재 신청 후 24시간 내 입금하지 않을 경우 주문이 취소됩니다.</div>
      </div>
      <div className={styles.purchase_notes_content}>
        <div>• </div>
        <div>
          입력한 구매자명과 실제 입금자명이 다를 경우 원할한 구매 처리가
          어렵습니다.
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotes;
