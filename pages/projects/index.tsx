import React, { useEffect, useState } from 'react';
import BottomNav from '../../components/nav/bottom_nav';
import AppBar from '../../components/nav/app_bar';
import ListOfProjectsLayout from '../../layout/list_of_projects_layout';
import { ProjectListModel } from '../../models/model/project-list';
import { getAllProjects } from '../../api';
import { useRecoilState } from 'recoil';
import { getProjectQueryAtom } from '../../recoil';
import { ProjectListViewModel } from '../../models/view-model/project-list';
import { CircularProgress } from '@mui/material';

const Projects = () => {
  const [query, setQuery] = useRecoilState(getProjectQueryAtom);
  const [projectListViewModel, setProjectViewModel] =
    useState<ProjectListViewModel>();
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    const projects = await getAllProjects(query);
    if (!projects) {
      alert('서버 에러입니다. 관리자에게 문의해주세요');
      return;
    }

    return new ProjectListModel(projects);
  };

  useEffect(() => {
    if (isLoading || projectListViewModel === undefined) {
      init().then((projectListModel) => {
        if (projectListModel) {
          setProjectViewModel(new ProjectListViewModel(projectListModel));
        }

        setIsLoading(false);
      });
    }
  }, [isLoading]);
  return (
    <div>
      <AppBar />
      {isLoading || projectListViewModel === undefined ? (
        <CircularProgress />
      ) : (
        <ListOfProjectsLayout
          projectListViewModel={projectListViewModel}
          setProjectViewModel={setProjectViewModel}
        ></ListOfProjectsLayout>
      )}
      <BottomNav />
    </div>
  );
};

export default Projects;
