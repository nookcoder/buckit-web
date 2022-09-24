import React, { useState } from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import { Waypoint } from 'react-waypoint';
import styles from '../styles/layout/ListOfProjects.module.scss';
import ProjectScrollWindow from './projects/project_scroll_window';
import { ProjectListViewModel } from '../models/view-model/project-list';

interface ListOfProjectsLayoutProps {
  projectListViewModel: ProjectListViewModel;
}

const ListOfProjectsLayout = ({
  projectListViewModel,
}: ListOfProjectsLayoutProps) => {
  // TODO : 탭 클릭 이벤트 추가하기
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className={styles.container}>
      <Box
        className={styles.tab_container}
        sx={{ borderBottom: 'solid 1px rgba(0,0,0,0.2)' }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label={'프로젝트 진행상황'}
          sx={{ marginTop: 0 }}
        >
          <StyledTab label={'진행중'} />
          <StyledTab label={'진행 예정'} />
          <StyledTab label={'마감'} />
        </StyledTabs>
      </Box>
      <ProjectScrollWindow projectListViewModel={projectListViewModel} />
      <Waypoint></Waypoint>
    </main>
  );
};

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (events: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs variant={'fullWidth'} {...props} />
))({
  marginTop: '20px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#4EB08B',
  },
});

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)({
  '&.Mui-selected': {
    color: '#4EB08B',
  },
});

export default ListOfProjectsLayout;
