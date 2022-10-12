import React from 'react';
import styles from '../../../styles/components/common/Popup.module.scss';
import { Box, Button, Drawer, Modal } from '@mui/material';
import eventPopup from '../../../public/assets/event_popup.png';
import Image from 'next/image';
import { Cookies } from 'react-cookie';

interface EventPopupProps {
  state: boolean;
  setState: any;
  onClick: any;
}

export const DONT_SHOW_POPUP = 'popup_1';

const EventPopup = ({ state, setState, onClick }: EventPopupProps) => {
  const cookies = new Cookies();

  const handleDayClick = () => {
    let expires = new Date();
    expires = new Date(expires.setHours(expires.getHours() + 24));
    cookies.set(DONT_SHOW_POPUP, false, {
      expires: expires,
    });
    setState(false);
  };
  const closePopup = () => {
    setState(false);
  };

  return (
    <Modal open={state} onClose={closePopup} disableAutoFocus={true}>
      <div className={styles.bottom_container}>
        <div className={styles.image_box}>
          <Image src={eventPopup} layout={'responsive'} onClick={onClick} />
        </div>
        <div className={styles.button_group}>
          <Button onClick={handleDayClick}>
            <span className={styles.button_text}>하루동안 보지 않기</span>
          </Button>
          <Button>
            <span className={styles.button_text} onClick={closePopup}>
              닫기
            </span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EventPopup;
