import React from 'react';
import { IconButton, styled, ToggleButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckIcon from '@mui/icons-material/Check';
import styles from '../../styles/components/projects/ProjectToggleInput.module.scss';

interface ProjectToggleInputProps {
  title: string;
  type: 'privacy' | 'purchase' | 'notice';
  selected: {
    privacy: boolean;
    purchase: boolean;
    notice: boolean;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      privacy: boolean;
      purchase: boolean;
      notice: boolean;
    }>
  >;
  url: string;
}

const ProjectToggleInput = ({
  title,
  type,
  selected,
  setSelected,
  url,
}: ProjectToggleInputProps) => {
  const goToPage = () => {
    window.open(url);
  };
  const onChange = () => {
    switch (type) {
      case 'privacy':
        setSelected({
          ...selected,
          privacy: !selected.privacy,
        });
        return;
      case 'purchase':
        setSelected({
          ...selected,
          purchase: !selected.purchase,
        });
        return;
      case 'notice':
        setSelected({
          ...selected,
          notice: !selected.notice,
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_column}>
        <CustomToggleButton
          selectedStyled={
            type === 'privacy' ? selected.privacy : selected.purchase
          }
          value={type === 'privacy' ? selected.privacy : selected.purchase}
          selected={type === 'privacy' ? selected.privacy : selected.purchase}
          onChange={onChange}
        >
          {type === 'privacy' ? (
            selected.privacy ? (
              <CheckIcon fontSize={'small'} sx={{ color: 'white' }} />
            ) : (
              <></>
            )
          ) : selected.purchase ? (
            <CheckIcon fontSize={'small'} sx={{ color: 'white' }} />
          ) : (
            <></>
          )}
        </CustomToggleButton>
        <span className={styles.title}>{title}</span>
      </div>
      <div>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

interface CustomToggleButtonProps {
  selectedStyled: boolean;
}

const CustomToggleButton = styled(ToggleButton)(
  (props: CustomToggleButtonProps) => ({
    padding: props.selectedStyled ? '1px' : '',
    '&.Mui-selected': {
      backgroundColor: '#4EB08B',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#4EB08B',
    },
  })
);

export default ProjectToggleInput;
