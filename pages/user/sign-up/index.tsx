import React, { ChangeEvent } from 'react';
import InputPhoneNumber from '../../../layout/user/input-phone-number';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { createUserAtom } from '../../../recoil';
import { getOnlyNumber, isPhoneNumber } from '../../../utils';
import { CreateUserType } from '../../../interface/';
import { isExistUser } from '../../../api/auth/validate.api';
import { CERTIFICATION } from '../../../constants';

const SignUpPhoneNumber = () => {
  const router = useRouter();
  const [createUser, setCreateUser] =
    useRecoilState<CreateUserType>(createUserAtom);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = getOnlyNumber(event.target.value);
    setCreateUser({
      ...createUser,
      phoneNumber: value,
    });
    return;
  };

  const goBack = () => {
    router.push('/user');
  };

  const goCertification = async () => {
    if (isPhoneNumber(createUser.phoneNumber)) {
      const isExist = await isExistUser({
        phoneNumber: createUser.phoneNumber,
      });

      if (isExist) {
        setCreateUser({
          ...createUser,
          phoneNumber: '',
        });
        alert('이미 가입된 번호입니다');
        return;
      }

      return await router.push(CERTIFICATION);
    }

    // alert('올바른 휴대폰 번호를 입력해주세요');
    return;
  };

  return (
    <div>
      <AppBarWithBackArrow onClick={goBack} />

      <InputPhoneNumber
        buttonText={'다음(1/3)'}
        onChange={onChange}
        onClick={goCertification}
        value={createUser.phoneNumber}
      />
    </div>
  );
};

export default SignUpPhoneNumber;
