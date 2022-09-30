import React, { useCallback, useEffect, useState } from 'react';
import InputPasswordLayout from '../../../layout/user/input-password.layout';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { useRecoilState } from 'recoil';
import {
  createUserAtom,
  newPasswordCheckSelector,
  newPasswordSelector,
} from '../../../recoil';
import { CreateUserType } from '../../../interface';
import { useRouter } from 'next/router';
import { createNewUser } from '../../../api';

const Password = () => {
  const router = useRouter();
  const newPassword = useRecoilState(newPasswordSelector);
  const newPasswordCheck = useRecoilState(newPasswordCheckSelector);
  const [createUser, setCreateUser] =
    useRecoilState<CreateUserType>(createUserAtom);
  const [shake, setShake] = useState<boolean>(false);

  // todo : 신규 비밀번호 입력하는 layout 만들기 -> 로그인 이후에도 쓰임
  useEffect(() => {
    if (newPassword[0].length === 6 && newPasswordCheck[0].length === 6) {
      handlePasswordInput(newPassword[0], newPasswordCheck[0]);
    }
  }, [newPassword, newPasswordCheck]);

  const handlePasswordInput = useCallback(
    (newPasswordValue: string, newPasswordCheckValue: string) => {
      const setNewPassword = newPassword[1];
      const setNewPasswordCheck = newPasswordCheck[1];
      if (!isEqualValue(newPasswordValue, newPasswordCheckValue)) {
        setNewPassword('');
        setNewPasswordCheck('');
        setShake(true);
        return;
      }
      setCreateUser({
        ...createUser,
        password: newPasswordValue,
      });
      setNewPasswordCheck('');
      router.replace('/user/sign-up/completion', '/').then(() => {
        setShake(false);
        setNewPassword('');
      });
      return;
    },
    []
  );

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
