import React, { ChangeEvent } from 'react';
import InputPhoneNumber from '../../../layout/user/input-phone-number';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { createUserAtom } from '../../../recoil';

const SignUpPhoneNumber = () => {
  // todo : 휴대폰 인증 넣기
  const router = useRouter();
  const [createUser, setCreateUser] = useRecoilState(createUserAtom);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
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
    if (createUser.phoneNumber.match(/^(011|010)[0-9]{3,4}[0-9]{4}/)) {
      return await router.push('/certification');
    }

    alert('올바른 휴대폰 번호를 입력해주세요');
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
