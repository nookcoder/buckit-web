import React, { MouseEventHandler } from 'react';
import styles from '../../../styles/pages/user/Terms.module.scss';
import { IconButton } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CircleIcon from '@mui/icons-material/Circle';

interface TermsColumProps {
  title: string;
  arrow_visible: boolean;
  url?: string;
  toggleValue: boolean;
  handleToggleValue: MouseEventHandler<HTMLButtonElement>;
}

const TermsColumn = ({
  title,
  arrow_visible,
  url,
  toggleValue,
  handleToggleValue,
}: TermsColumProps) => {
  const goToTermsPage = () => {
    window.open(url);
  };

  return (
    <div className={styles.terms_column}>
      <div>
        <IconButton
          onClick={handleToggleValue}
          sx={{
            padding: '0',
          }}
        >
          {toggleValue ? (
            <CircleIcon color={'success'} />
          ) : (
            <CircleOutlinedIcon />
          )}
        </IconButton>
        <span className={styles.terms_column_title}>{title}</span>
      </div>
      {arrow_visible ? (
        <IconButton onClick={goToTermsPage}>
          <ChevronRightOutlinedIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TermsColumn;
