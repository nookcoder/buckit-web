import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {
  CertificationResponse,
  CreateUserType,
  IMPResponse,
} from '../../interface';
import { createUserAtom, userPhoneNumberAtom } from '../../recoil';
import { getUserCertificated } from '../../api';
import { SIGNUP_PHONE } from '../../constants';
import Script from 'next/script';

const UpdateCertification = () => {
  const router = useRouter();
  const [phone, setPhone] = useRecoilState<string>(userPhoneNumberAtom);

  const checkCertification = async (response: IMPResponse) => {
    try {
      const data: CertificationResponse = await getUserCertificated(
        response.imp_uid,
        response.merchant_uid,
        response.success
      );
      return;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // @ts-ignore
    const IMP = window.IMP;

    if (IMP) {
      window.IMP.init(process.env.IMP_CERTIFICATION_CODE);
      IMP.certification(
        {
          // param
          merchant_uid: process.env.MERCHANT_UID, // 주문 번호
          m_redirect_url: process.env.BASE_URL,
          popup: false, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
          phone: phone,
        },
        async (rsp: IMPResponse) => {
          if (rsp.success) {
            await checkCertification(rsp);
            await router.push('/user/update/password');
          } else {
            await router.push('/user/update');
          }
        }
      );
    } else {
      window.location.reload();
    }
  }, []);
  return (
    <div>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
        strategy={'beforeInteractive'}
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        strategy={'beforeInteractive'}
      ></Script>
    </div>
  );
};

export default UpdateCertification;
