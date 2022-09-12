import React from 'react';
import styles from '../../styles/layout/user/InputPasswordLayout.module.scss';
import InputPassword from '../../components/common/input/input-password';
import KeyPad from '../../components/common/key-pad/key_pad';
import { Button } from '@mui/material';

interface InputPasswordLayoutProps {
  layout_title: string;
  find_password_button_visible?: boolean;
}

const InputPasswordLayout = ({
  layout_title,
  find_password_button_visible,
}: InputPasswordLayoutProps) => {
  const FindPasswordButton = (visible: boolean) => {
    return visible ? (
      <div className={styles.find_password_button}>
        <Button sx={{ color: 'rgba(0,0,0,0.5)' }} variant={'text'}>
          비밀번호를 잊어버렸어요
        </Button>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div className={styles.main_container}>
      <section>
        <div className={styles.title}>{layout_title}</div>
        <InputPassword />
        {FindPasswordButton(find_password_button_visible!!)}
      </section>
      <section>
        <KeyPad password={true} max_button_disabled={true} />
      </section>
    </div>
  );
};

export default InputPasswordLayout;
