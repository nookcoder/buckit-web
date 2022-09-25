import React, { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { createUserAtom } from '../../recoil';
import { getUserCertificated } from '../../api';
import {
  CertificationResponse,
  CreateUserType,
  IMPResponse,
} from '../../interface';
import { SIGNUP_PHONE } from '../../constants';

const PhoneCertification = () => {
  const router = useRouter();
  const [createUser, setCreateUser] =
    useRecoilState<CreateUserType>(createUserAtom);

  const updateUserCertification = async (response: IMPResponse) => {
    try {
      const data: CertificationResponse = await getUserCertificated(
        response.imp_uid,
        response.merchant_uid,
        response.success
      );
      setCreateUser({
        ...createUser,
        name: data.name,
        birth: data.birthday,
        gender: data.gender,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // @ts-ignore
    const IMP = window.IMP;
    if (createUser.phoneNumber.length == 0) {
      router.push(SIGNUP_PHONE);
      return;
    }
    if (IMP) {
      IMP.init(process.env.IMP_CERTIFICATION_CODE);
      IMP.certification(
        {
          // param
          merchant_uid: process.env.MERCHANT_UID, // 주문 번호
          m_redirect_url: process.env.BASE_URL,
          popup: false, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
          phone: createUser.phoneNumber,
        },
        async (rsp: IMPResponse) => {
          if (rsp.success) {
            await updateUserCertification(rsp);
            await router.push('/user/sign-up/email');
          } else {
            setCreateUser({
              ...createUser,
              phoneNumber: '',
            });
            await router.push('/user/sign-up');
          }
        }
      );
    } else {
      window.location.reload();
    }
  }, []);
  return <div></div>;
};

export default PhoneCertification;
