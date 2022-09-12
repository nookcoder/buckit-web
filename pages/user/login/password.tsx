import React, { useState } from 'react';
import styles from '../../../styles/pages/user/Passowrd.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { Icon } from '@mui/material';
import InputPassword from '../../../components/common/input/input-password';
import KeyPad from '../../../components/common/key-pad/key_pad';
import InputPasswordLayout from '../../../layout/user/input-password.layout';

const Password = () => {
  const [shake, setShake] = useState(false);
  const toggleShake = () => {
    setShake(!shake);
  };
  const passwordUi = () => {
    const password = [0, 0, 0, 0, 0, 0];
    return password.map((value, index, array) => (
      <div key={index}>
        <Icon>
          <CircleOutlinedIcon />
        </Icon>
      </div>
    ));
  };
  return (
    <div>
      {/*<div*/}
      {/*  className={`${styles.container} ${shake ? styles.shake : ''}`}*/}
      {/*  onClick={toggleShake}*/}
      {/*></div>*/}
      <AppBarWithBackArrow />
      <main className={styles.main_container}>
        <InputPasswordLayout
          layout_title={'비밀번호'}
          find_password_button_visible={true}
        />
      </main>
    </div>
  );
};

export default Password;
