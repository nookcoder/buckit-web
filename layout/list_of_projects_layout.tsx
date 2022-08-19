import React, { useState } from 'react';
import { Box, styled, Tab, Tabs } from '@mui/material';

interface ListOfProjectsLayoutProps {
  children: React.ReactNode;
}

const ListOfProjectsLayout = ({ children }: ListOfProjectsLayoutProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 'solid 1px rgba(0,0,0,0.2)' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label={'프로젝트 진행상황'}
        >
          <StyledTab label={'진행중'} />
          <StyledTab label={'진행 예정'} />
          <StyledTab label={'마감'} />
        </StyledTabs>
      </Box>
      {children}
    </>
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
