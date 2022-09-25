import React from 'react';
import styles from '../../styles/pages/my-page/Mypage.module.scss';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface UserInfoBoxProps {
  name: string;
  phoneNumber: string;
  email: string;
}

const UserInfoBox = ({ name, phoneNumber, email }: UserInfoBoxProps) => {
  return (
    <div className={styles.user_container}>
      <div className={styles.user_name}>
        <span>{name}</span>
        <IconButton sx={{ padding: 0 }}>
          <EditIcon color={'success'} />
        </IconButton>
      </div>
      <div className={styles.user_extra_info_container}>
        <PhoneIphoneIcon color={'success'} fontSize={'small'} />
        <span>{phoneNumber}</span>
      </div>
      <div className={styles.user_extra_info_container}>
        <EmailOutlinedIcon color={'success'} fontSize={'small'} />
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserInfoBox;
