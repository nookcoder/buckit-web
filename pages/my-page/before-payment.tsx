import React, { ReactElement, useEffect, useRef, useState } from 'react';
import MyProjectsLayout from '../../layout/my-page/my_projects_layout';
import { ProductModel } from '../../models/model/product';
import ProductViewModel from '../../models/view-model/product';
import { FixedSizeList as List } from 'react-window';
import styles from '../../styles/components/my-page/MyProjectBox.module.scss';
import BeforePaymentProjectBox from '../../components/my-page/before_payment_project_box';

const BeforePaymentProjects = () => {
  const projectModel = new ProductModel();
  const projectViewModel = new ProductViewModel(projectModel);

  const [clientHeight, setClientHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [clientHeight]);

  return (
    <main ref={containerRef} className={styles.container}>
      <div>
        <List
          itemSize={155}
          height={clientHeight - 50}
          itemCount={25}
          width={'100%'}
        >
          {({ index, style }) => (
            <BeforePaymentProjectBox
              index={index}
              style={style}
              projectViewModel={projectViewModel}
            />
          )}
        </List>
      </div>
    </main>
  );
};

BeforePaymentProjects.getLayout = function getLayout(page: ReactElement) {
  return (
    <MyProjectsLayout title={'예약된 프로젝트'} sub_title={'예약 정보'}>
      {page}
    </MyProjectsLayout>
  );
};

export default BeforePaymentProjects;
