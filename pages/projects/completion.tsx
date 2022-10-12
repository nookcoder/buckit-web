import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/ProjectPurchaseCompletion.module.scss';
import PaymentsLayout from '../../layout/projects/payments-layout';
import { useRecoilState } from 'recoil';
import { OrderInput, OrderInputAtom } from '../../interface';
import { currentProjectIdAtom, orderAtom } from '../../recoil';
import { useRouter } from 'next/router';
import AlertModal from '../../components/common/modal/alert-modal';
import { createOrder } from '../../api/order';

const Completion = () => {
  const router = useRouter();
  const [errorModal, setErrorModal] = useState(false);
  const [currentProjectId, setCurrentProjectId] =
    useRecoilState(currentProjectIdAtom);
  const [orderInput, setOrderInput] = useRecoilState<OrderInputAtom>(orderAtom);
  const [isFirst, setIsFirst] = useState(true);

  const init = async () => {
    try {
      const body: OrderInput = {
        ...orderInput,
        project_id: currentProjectId,
      };

      await createOrder(body, () => {
        setErrorModal(true);
        router.replace(`/projects/${currentProjectId}`);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onClick = () => {
    router.replace('/my-page/before-payment');
  };

  useEffect(() => {
    if (
      orderInput.quarter_qty === 0 ||
      !orderInput.buyer_name ||
      !orderInput.buyer_bank
    ) {
      setErrorModal(true);
      router.replace(`/projects`);
      return;
    }

    if (isFirst) {
      setIsFirst(false);
      init().catch((err) => {});
      return;
    }
  }, []);

  return (
    <div className={styles.container}>
      <PaymentsLayout onClick={onClick} />
      <AlertModal
        title={'결재 도중 오류가 발생했습니다.'}
        open={errorModal}
        setOpen={setErrorModal}
      />
    </div>
  );
};

export default Completion;
