import React, { useCallback, useEffect, useState } from 'react';
import InputPasswordLayout from '../../../layout/user/input-password.layout';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { useRecoilState } from 'recoil';
import {
  createUserAtom,
  newPasswordCheckAtom,
  newPasswordCheckSelector,
  newPasswordSelector,
} from '../../../recoil';
import { CreateUserType } from '../../../interface';
import { useRouter } from 'next/router';

const Password = () => {
  // todo : 페이지 따로 만들지말고 여기서 신규/확인 기능 넣기
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
      if (!isEqualValue(newPasswordValue, newPasswordCheckValue)) {
        const setNewPassword = newPassword[1];
        const setNewPasswordCheck = newPasswordCheck[1];

        setNewPassword('');
        setNewPasswordCheck('');
        setShake(true);
        return;
      }

      createNewUser(newPasswordValue);
      return;
    },
    []
  );

  const createNewUser = (password: string) => {
    console.log(password);
    setCreateUser({
      ...createUser,
      password: password,
    });
    const setNewPasswordCheck = newPasswordCheck[1];
    setNewPasswordCheck('');
    router.replace('/user/sign-up/completion');
    return;
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
          shake={shake}
        />
      )}
    </div>
  );
};

export default Password;
