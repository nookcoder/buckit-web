import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../../styles/pages/user/Passowrd.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import InputPasswordLayout from '../../../layout/user/input-password.layout';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userPasswordSelector, userPhoneNumberAtom } from '../../../recoil';
import { login } from '../../../api';
import axios, { AxiosError } from 'axios';
import { LoginOutput } from '../../../interface';

const Password = () => {
  const router = useRouter();
  const userPassword = useRecoilState(userPasswordSelector);
  const [phone, setPhone] = useRecoilState(userPhoneNumberAtom);
  const [shake, setShake] = useState<boolean>(false);

  const handlePasswordInput = async (phoneNumber: string, password: string) => {
    const setUserPassword = userPassword[1];

    return await login({
      phoneNumber: phoneNumber,
      password: password,
    })
      .then((res) => {
        const tokens: LoginOutput = res.data;
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${tokens.access_token}`;
        localStorage.setItem(
          `${process.env.REFRESH_COOKIE_KEY}`,
          tokens.refresh_token
        );
        setUserPassword('');
      })
      .then(() => {
        router.push('/');
      })
      .catch((err: AxiosError) => {
        setUserPassword('');
        setShake(true);
      });
  };

  useEffect(() => {
    if (!phone) {
      router.push('/user/login');
    }
    if (userPassword[0].length === 6) {
      handlePasswordInput(phone, userPassword[0]);
    }
  }, [shake, userPassword[0]]);

  return (
    <div>
      <AppBarWithBackArrow />
      <main className={styles.main_container}>
        <InputPasswordLayout
          layout_title={'비밀번호'}
          find_password_button_visible={true}
          passwordSelector={userPassword}
          shake={shake}
        />
      </main>
    </div>
  );
};

export default Password;
