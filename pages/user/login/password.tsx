import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../../styles/pages/user/Passowrd.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import InputPasswordLayout from '../../../layout/user/input-password.layout';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userPasswordSelector, userPhoneNumberAtom } from '../../../recoil';
import { login } from '../../../api';
import { AxiosError } from 'axios';

const Password = () => {
  const router = useRouter();
  const userPassword = useRecoilState(userPasswordSelector);
  const [phone, setPhone] = useRecoilState(userPhoneNumberAtom);
  const [shake, setShake] = useState<boolean>(false);

  // todo : 로그인 로직 관련 추가
  const handlePasswordInput = useCallback(
    async (phoneNumber: string, password: string) => {
      await login({
        phoneNumber: phoneNumber,
        password: password,
      });
    },
    []
  );

  useEffect(() => {
    if (!phone) {
      router.push('/user/login');
    }
    if (userPassword[0].length === 6) {
      handlePasswordInput(phone, userPassword[0])
        .then((res) => {
          console.log(res);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  }, [userPassword[0]]);

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
