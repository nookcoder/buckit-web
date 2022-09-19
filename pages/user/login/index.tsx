import React, { ChangeEventHandler } from 'react';
import InputPhoneNumber from '../../../layout/user/input-phone-number';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userPhoneNumberAtom } from '../../../recoil';
import { getOnlyNumber, isPhoneNumber } from '../../../utils';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { isExistUser } from '../../../api/auth/validate.api';

const LoginId = () => {
  const router = useRouter();
  const [phone, setPhone] = useRecoilState<string>(userPhoneNumberAtom);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = getOnlyNumber(event.target.value);
    setPhone(value);
    return;
  };

  const goBack = async () => {
    await router.push('/user');
  };
  const goPasswordPage = async () => {
    if (isPhoneNumber(phone)) {
      const isExist = await isExistUser({ phoneNumber: phone });

      if (!isExist) {
        setPhone('');
        alert('가입되지 않은 번호입니다.');
        return;
      }

      return await router.push('/user/login/password');
    }
  };

  return (
    <div>
      <AppBarWithBackArrow onClick={goBack} />
      <InputPhoneNumber
        buttonText={'다음'}
        onChange={onChange}
        onClick={goPasswordPage}
        value={phone}
      />
    </div>
  );
};

export default LoginId;
