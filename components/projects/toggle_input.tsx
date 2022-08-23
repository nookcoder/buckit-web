import React from 'react';
import { IconButton, styled, ToggleButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckIcon from '@mui/icons-material/Check';
import styles from '../../styles/components/projects/ProjectToggleInput.module.scss';

interface ProjectToggleInputProps {
  title: string;
}

const ProjectToggleInput = ({ title }: ProjectToggleInputProps) => {
  const [selected, setSelected] = React.useState(false);
  const onChange = () => {
    setSelected(!selected);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_column}>
        <CustomToggleButton
          selectedStyled={selected}
          value={selected}
          selected={selected}
          onChange={onChange}
        >
          {selected ? (
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
