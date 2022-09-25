import React, { ReactElement } from 'react';
import MyProjectsLayout from '../../layout/my-page/my_projects_layout';
import MyProjects from './my-projects';
import NoFoundProjects from '../../layout/my-page/no-found-projects';
import { useRouter } from 'next/router';

const ProfitHistory = () => {
  const router = useRouter();
  return (
    <div>
      <NoFoundProjects router={router} />
    </div>
  );
};

ProfitHistory.getLayout = function getLayout(page: ReactElement) {
  return <MyProjectsLayout title={'수익 내역'}>{page}</MyProjectsLayout>;
};

export default ProfitHistory;
