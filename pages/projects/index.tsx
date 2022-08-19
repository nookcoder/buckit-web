import React from 'react';
import BottomNav from '../../components/nav/bottom_nav';
import AppBar from '../../components/nav/app_bar';
import ListOfProjectsLayout from '../../layout/list_of_projects_layout';

const Projects = () => {
  return (
    <div>
      <AppBar />
      <ListOfProjectsLayout></ListOfProjectsLayout>
      <BottomNav />
    </div>
  );
};

export default Projects;
