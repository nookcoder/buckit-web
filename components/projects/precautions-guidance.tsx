import React from 'react';
import styles from '../../styles/pages/CheckingPurchase.module.scss';

const PrecautionsGuidance = () => {
  return (
    <div className={styles.guide_container}>
      <h3>주의사항 및 운영/관리위탁에 대한 동의</h3>
      <div className={styles.guide_text}>
        1. 구매 취소는 구매 후 영업일 7일 이내 가능합니다.
        <br />
        단, 공동구매율 100%가 달성되어 확정된 프로젝트는 취소가 불가능합니다.
        <br />
        (프로젝트가 이미 오픈됨에 따라 비용 지불이 진행된 상태이며, 타 고객들의
        권리보호를 위함입니다.)
        <br />
        2. 공동구매가 완료되면 프로젝트 오픈 준비가 진행됩니다.
        <br />
        3. 매장 오픈 시 회사의 운영방침에 따라 매장이 운영되며, 구매한 원금을
        보장하지 않습니다.
        <br />
        4. 공동구매 참여 시 해당 프로젝트의 운영/관리를 버킷에 위탁하는 것에
        동의하는 것으로 간주합니다.
      </div>
    </div>
  );
};

export default PrecautionsGuidance;
