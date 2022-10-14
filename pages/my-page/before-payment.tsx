import React, { ReactElement, useEffect, useRef, useState } from 'react';
import MyProjectsLayout from '../../layout/my-page/my_projects_layout';
import { FixedSizeList as List } from 'react-window';
import styles from '../../styles/components/my-page/MyProjectBox.module.scss';
import BeforePaymentProjectBox from '../../components/my-page/before_payment_project_box';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import NoFoundProjects from '../../layout/my-page/no-found-projects';
import { useRouter } from 'next/router';
import { getMyOrders } from '../../api/order';
import { CircularProgress, Divider } from '@mui/material';
import { GetMyOrders, MyOrder } from '../../models/model/order';
import { IGetMyOrder } from '../../interface/orders';

const BeforePaymentProjects = () => {
  const router = useRouter();
  const [clientHeight, setClientHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [myOrder, setMyOrder] = useState<GetMyOrders>();
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    if (isLoading) {
      setIsLoading(false);
      const orders: IGetMyOrder[] = await getMyOrders();
      setMyOrder(new GetMyOrders(orders));
      return;
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }

    init().then(() => {});
  }, [clientHeight]);

  return (
    <main ref={containerRef} className={styles.container}>
      {isLoading || myOrder == undefined ? (
        <CircularProgress />
      ) : (
        <>
          {myOrder && myOrder.get().length > 0 ? (
            <div>
              <h3 className={styles.sub_title}>예약정보</h3>
              <List
                itemSize={240}
                height={clientHeight - 50}
                itemCount={myOrder.get().length}
                width={'100%'}
              >
                {({ index, style }) => (
                  <BeforePaymentProjectBox
                    index={index}
                    style={style}
                    order={new MyOrder(myOrder?.get()[index])}
                  />
                )}
              </List>
            </div>
          ) : (
            <>
              <NoFoundProjects router={router} />
            </>
          )}
        </>
      )}
    </main>
  );
};

BeforePaymentProjects.getLayout = function getLayout(page: ReactElement) {
  return <MyProjectsLayout title={'예약된 프로젝트'}>{page}</MyProjectsLayout>;
};

export default BeforePaymentProjects;
