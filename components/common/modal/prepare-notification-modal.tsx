import React from 'react';
import { Box, Button, Icon, Modal, Typography } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import styles from '../../../styles/components/common/Modal.module.scss';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import FullWidthButton from '../buttons/full_width_button';
interface PrepareNotificationModalProps {
  open: boolean;
  setOpen: React.SetStateAction<any>;
}
const PrepareNotificationModal = ({
  open,
  setOpen,
}: PrepareNotificationModalProps) => {
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
            <AnnouncementIcon color={'success'} fontSize={'large'} />
          </div>
          <h4 className={styles.title}>
            아직 준비 중입니다
            <br />
            조금만 기다려주세요🙏
          </h4>

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

export default PrepareNotificationModal;
