import React, { useEffect, useState } from 'react';
import InputPasswordLayout from '../../../layout/user/input-password.layout';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { useRecoilState } from 'recoil';
import {
  newPasswordCheckSelector,
  newPasswordSelector,
  userPhoneNumberAtom,
} from '../../../recoil';
import { useRouter } from 'next/router';
import { updatePassword } from '../../../api';

const Password = () => {
  const router = useRouter();
  const newPassword = useRecoilState(newPasswordSelector);
  const newPasswordCheck = useRecoilState(newPasswordCheckSelector);
  const phoneNumber = useRecoilState(userPhoneNumberAtom);
  const [shake, setShake] = useState<boolean>(false);

  // todo : 신규 비밀번호 입력하는 layout 만들기 -> 로그인 이후에도 쓰임
  useEffect(() => {
    if (newPassword[0].length === 6 && newPasswordCheck[0].length === 6) {
      handlePasswordInput(newPassword[0], newPasswordCheck[0]);
    }
  }, [newPassword, newPasswordCheck]);

  const handlePasswordInput = (
    newPasswordValue: string,
    newPasswordCheckValue: string
  ) => {
    const setNewPassword = newPassword[1];
    const setNewPasswordCheck = newPasswordCheck[1];
    if (!isEqualValue(newPasswordValue, newPasswordCheckValue)) {
      setNewPassword('');
      setNewPasswordCheck('');
      setShake(true);
      return;
    }

    setNewPasswordCheck('');
    router
      .push('/user')
      .then(async () => {
        setShake(false);
        await requestUpdatePassword(phoneNumber[0], newPassword[0]);
      })
      .then(async () => {
        setNewPassword('');
      });

    return;
  };

  const requestUpdatePassword = async (
    phoneNumber: string,
    password: string
  ) => {
    try {
      await updatePassword({
        password,
        phoneNumber,
      })
        .then((res) => {})
        .catch((err) => {});
    } catch (err) {
      alert('서버 에러입니다. 관리자에게 문의해주세요');
    }
  };

  const isEqualValue = (newPassword: string, newPasswordCheck: string) => {
    return newPassword === newPasswordCheck;
  };

  return (
    <div>
      <AppBarWithBackArrow />
      {newPassword[0].length < 6 ? (
        <InputPasswordLayout
          layout_title={'신규 비밀번호 입력'}
          passwordSelector={newPassword}
          shake={shake}
        />
      ) : (
        <InputPasswordLayout
          layout_title={'신규 비밀번호 입력 확인'}
          passwordSelector={newPasswordCheck}
        />
      )}
    </div>
  );
};

export default Password;
