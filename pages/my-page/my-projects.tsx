import React, { ReactElement } from 'react';
import MyProjectsLayout from '../../layout/my-page/my_projects_layout';
import BeforePaymentProjects from './before-payment';
import NoFoundProjects from '../../layout/my-page/no-found-projects';
import { useRouter } from 'next/router';

const MyProjects = () => {
  const router = useRouter();
  return (
    <div>
      <NoFoundProjects router={router} />
    </div>
  );
};

MyProjects.getLayout = function getLayout(page: ReactElement) {
  return (
    <MyProjectsLayout title={'영업 중인 프로젝트'}>{page}</MyProjectsLayout>
  );
};

export default MyProjects;
