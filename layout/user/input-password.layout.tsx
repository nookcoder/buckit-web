import React from 'react';
import styles from '../../styles/layout/user/InputPasswordLayout.module.scss';
import InputPassword from '../../components/common/input/input-password';
import KeyPad from '../../components/common/key-pad/key_pad';
import { Button } from '@mui/material';
import { SetterOrUpdater } from 'recoil';
import { useRouter } from 'next/router';

interface InputPasswordLayoutProps {
  layout_title: string;
  find_password_button_visible?: boolean;
  passwordSelector: [string, SetterOrUpdater<string>];
  shake?: boolean;
}

const InputPasswordLayout = ({
  layout_title,
  find_password_button_visible,
  passwordSelector,
  shake,
}: InputPasswordLayoutProps) => {
  const router = useRouter();
  const goToUpdatePassword = async () => {
    await router.push('/user/update');
  };

  const FindPasswordButton = (visible: boolean) => {
    return visible ? (
      <div className={styles.find_password_button}>
        <Button
          sx={{ color: 'rgba(0,0,0,0.5)' }}
          variant={'text'}
          onClick={goToUpdatePassword}
        >
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
        <InputPassword value={passwordSelector[0]} shake={shake} />
        {FindPasswordButton(find_password_button_visible!!)}
      </section>
      <section>
        <KeyPad
          password={true}
          max_button_disabled={true}
          valueSelector={passwordSelector}
        />
      </section>
    </div>
  );
};

export default InputPasswordLayout;
