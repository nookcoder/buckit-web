import React, { useEffect, useState } from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';
import { Waypoint } from 'react-waypoint';
import styles from '../styles/layout/ListOfProjects.module.scss';
import ProjectScrollWindow from './projects/project_scroll_window';
import { ProjectListViewModel } from '../models/view-model/project-list';
import { useRecoilState } from 'recoil';
import { getProjectQueryAtom } from '../recoil';
import { ProjectStatus } from '../constants';
import { getAllProjects } from '../api';
import { ProjectListModel } from '../models/model/project-list';

interface ListOfProjectsLayoutProps {
  projectListViewModel: ProjectListViewModel;
  setProjectViewModel: React.Dispatch<
    React.SetStateAction<ProjectListViewModel | undefined>
  >;
}

const ListOfProjectsLayout = ({
  projectListViewModel,
  setProjectViewModel,
}: ListOfProjectsLayoutProps) => {
  // TODO : 탭 클릭 이벤트 추가하기
  const [value, setValue] = useState(ProjectStatus.Before);
  const [query, setQuery] = useRecoilState(getProjectQueryAtom);
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
    if (newValue === ProjectStatus.FundingEnd) {
      setQuery({
        ...query,
        status: ProjectStatus.FundingEnd,
      });

      return;
    }

    setQuery({
      ...query,
      status: ProjectStatus.Any,
    });

    return;
  };

  const reloadProjects = async () => {
    const projects = await getAllProjects(query);
    if (!projects) {
      return;
    }

    return new ProjectListModel(projects);
  };

  useEffect(() => {
    reloadProjects().then((model) => {
      if (model) {
        setProjectViewModel(new ProjectListViewModel(model));
      }
    });
  }, [query]);

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
          <StyledTab label={'진행중'} value={ProjectStatus.FUNDING_PROGRESS} />
          <StyledTab label={'진행 예정'} value={ProjectStatus.Before} />
          <StyledTab label={'마감'} value={ProjectStatus.FundingEnd} />
        </StyledTabs>
      </Box>
      <ProjectScrollWindow projectListViewModel={projectListViewModel} />
      <Waypoint></Waypoint>
    </main>
  );
};

interface StyledTabsProps {
  children?: React.ReactNode;
  value: ProjectStatus;
  onChange: (events: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
  value: any;
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
