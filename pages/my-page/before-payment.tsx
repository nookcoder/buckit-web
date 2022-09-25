import React, { ReactElement, useEffect, useRef, useState } from 'react';
import MyProjectsLayout from '../../layout/my-page/my_projects_layout';
import { ProjectModel } from '../../models/model/project';
import ProductViewModel from '../../models/view-model/project';
import { FixedSizeList as List } from 'react-window';
import styles from '../../styles/components/my-page/MyProjectBox.module.scss';
import BeforePaymentProjectBox from '../../components/my-page/before_payment_project_box';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import NoFoundProjects from '../../layout/my-page/no-found-projects';
import { useRouter } from 'next/router';

const BeforePaymentProjects = () => {
  // const projectModel = new ProjectModel();
  // const projectViewModel = new ProductViewModel(projectModel);
  const router = useRouter();
  const [clientHeight, setClientHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [clientHeight]);

  return (
    <main ref={containerRef} className={styles.container}>
      {/*<div>*/}
      {/*<h3 className={styles.sub_title}>예약정보</h3>*/}
      {/*  <List*/}
      {/*    itemSize={155}*/}
      {/*    height={clientHeight - 50}*/}
      {/*    itemCount={25}*/}
      {/*    width={'100%'}*/}
      {/*  >*/}
      {/*    {({ index, style }) => (*/}
      {/*      <BeforePaymentProjectBox*/}
      {/*        index={index}*/}
      {/*        style={style}*/}
      {/*        projectViewModel={projectViewModel}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </List>*/}
      {/*</div>*/}
      <NoFoundProjects router={router} />
    </main>
  );
};

BeforePaymentProjects.getLayout = function getLayout(page: ReactElement) {
  return <MyProjectsLayout title={'예약된 프로젝트'}>{page}</MyProjectsLayout>;
};

export default BeforePaymentProjects;
