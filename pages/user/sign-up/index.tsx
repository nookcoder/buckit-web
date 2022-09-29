import React, { ChangeEvent, useEffect, useState } from 'react';
import InputPhoneNumber from '../../../layout/user/input-phone-number';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { createUserAtom } from '../../../recoil';
import { getOnlyNumber, isPhoneNumber } from '../../../utils';
import { CertificationResponse, CreateUserType } from '../../../interface/';
import { isExistUser } from '../../../api/auth/validate.api';
import { CERTIFICATION } from '../../../constants';
import AlertModal from '../../../components/common/modal/alert-modal';
import { getUserCertificated } from '../../../api';

const SignUpPhoneNumber = () => {
  const router = useRouter();
  const [createUser, setCreateUser] =
    useRecoilState<CreateUserType>(createUserAtom);
  const [modal, setModal] = useState<boolean>(false);
  const [phoneModal, setPhoneModal] = useState<boolean>(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = getOnlyNumber(event.target.value);
    setCreateUser({
      ...createUser,
      phoneNumber: value,
    });
    return;
  };

  const redirectToEmailPage = async (imp_uid: string) => {
    await updateUserCertification(imp_uid);
    await router.push('/user/sign-up/email');
  };

  const updateUserCertification = async (imp_uid: string) => {
    const data: CertificationResponse = await getUserCertificated(
      imp_uid,
      '',
      true
    );
    setCreateUser({
      ...createUser,
      name: data.name,
      birth: data.birthday,
      gender: data.gender,
    });
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
        openModal();
        return;
      }

      return await router.push(CERTIFICATION);
    }

    openPhoneModal();
    return;
  };

  const openModal = () => {
    setModal(true);
  };

  const openPhoneModal = () => {
    setPhoneModal(true);
  };

  useEffect(() => {
    const { imp_uid } = router.query;
    if (imp_uid && typeof imp_uid === 'string') {
      redirectToEmailPage(imp_uid);
    }
  }, [router.query]);

  return (
    <div>
      <AppBarWithBackArrow onClick={goBack} />
      <InputPhoneNumber
        buttonText={'다음(1/3)'}
        onChange={onChange}
        onClick={goCertification}
        value={createUser.phoneNumber}
      />
      <AlertModal
        title={'이미 가입된 번호입니다'}
        open={modal}
        setOpen={setModal}
      />{' '}
      <AlertModal
        title={'올바른 형식이 아닙니다'}
        open={phoneModal}
        setOpen={setPhoneModal}
      />
    </div>
  );
};

export default SignUpPhoneNumber;
