import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../../../styles/layout/user/InputPhoneNumber.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { TextField } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { createUserAtom } from '../../../recoil';
import { SIGNUP_PHONE, SIGNUP_TERMS } from '../../../constants';
import { CertificationResponse, CreateUserType } from '../../../interface';
import { isEmail } from '../../../utils';
import { isExistUser } from '../../../api/auth/validate.api';
import AlertModal from '../../../components/common/modal/alert-modal';
import { getUserCertificated } from '../../../api';

const Email = () => {
  const router = useRouter();
  const [createUser, setCreateUser] =
    useRecoilState<CreateUserType>(createUserAtom);
  const [modal, setModal] = useState<boolean>(false);
  const [emailModal, setEmailModal] = useState<boolean>(false);

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
  const goBack = async () => {
    await router.push(SIGNUP_PHONE);
  };

  const onClick = async () => {
    if (isEmail(createUser.email)) {
      const isExist = await isExistUser({ email: createUser.email });
      if (isExist) {
        setCreateUser({
          ...createUser,
          email: '',
        });
        openModal();
        return;
      }

      await router.push(SIGNUP_TERMS);
      return;
    }

    openEmailModal();
    return;
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCreateUser({
      ...createUser,
      email: value,
    });
  };

  const openModal = () => {
    setModal(true);
  };

  const openEmailModal = () => {
    setEmailModal(true);
  };

  useEffect(() => {
    if (!createUser.phoneNumber) {
      router.push(SIGNUP_PHONE).catch((err) => console.error(err));
    }

    const { imp_uid } = router.query;
    if (imp_uid && typeof imp_uid === 'string') {
      updateUserCertification(imp_uid);
    }
  }, [router.query]);

  return (
    <div className={styles.container}>
      <AppBarWithBackArrow onClick={goBack} />
      <main className={styles.main_container}>
        <div className={styles.title_container}>
          <div className={styles.title}>???????????? ??????????????????</div>
          <TextField
            onChange={onChange}
            value={createUser.email}
            variant={'standard'}
            fullWidth={true}
            color={'success'}
            inputProps={{
              type: 'email',
            }}
            sx={{
              input: {
                textAlign: 'center',
                fontSize: '20px',
              },
            }}
          />
        </div>
        <div className={styles.footer}>
          <FullWidthButton
            variant={'contained'}
            text_color={'white'}
            padding={'15px 0'}
            onClick={onClick}
          >
            ??????(2/3)
          </FullWidthButton>
        </div>

        <AlertModal
          title={'?????? ????????? ??????????????????'}
          open={modal}
          setOpen={setModal}
        />

        <AlertModal
          title={'????????? ????????? ????????? ????????????'}
          open={emailModal}
          setOpen={setEmailModal}
        />
      </main>
    </div>
  );
};

export default Email;
