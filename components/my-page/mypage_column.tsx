import React, { MouseEventHandler } from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import styles from '../../styles/components/my-page/MyPageColumn.module.scss';

interface MyPageHistoryColumnProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MyPageHistoryColumn = ({ title, onClick }: MyPageHistoryColumnProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <span>{title}</span>
      <ChevronRightOutlinedIcon />
    </div>
  );
};

export default MyPageHistoryColumn;
