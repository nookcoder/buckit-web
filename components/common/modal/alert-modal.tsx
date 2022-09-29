import React from 'react';
import { Box, Button, Icon, Modal, Typography } from '@mui/material';
import styles from '../../../styles/components/common/Modal.module.scss';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FullWidthButton from '../buttons/full_width_button';

interface NoFoundModalProps {
  title: string;
  open: boolean;
  setOpen: React.SetStateAction<any>;
}

const AlertModal = ({ title, open, setOpen }: NoFoundModalProps) => {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {' '}
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.container}>
          <div className={styles.icon}>
            <ReportProblemIcon color={'error'} fontSize={'large'} />
          </div>
          <h4 className={styles.title}>{title}</h4>

          <div className={styles.button_container}>
            <FullWidthButton
              variant={'contained'}
              text_color={'white'}
              padding={'10px 10px'}
              onClick={closeModal}
            >
              확인
            </FullWidthButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AlertModal;
