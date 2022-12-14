import React, { MouseEventHandler, useState } from 'react';
import styles from '../../../styles/pages/user/Terms.module.scss';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import logo from '../../../public/assets/imageBuckitLogo.png';
import Image from 'next/image';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import { useRouter } from 'next/router';
import {
  SIGNUP_PASSWORD,
  TERM_MARKETING,
  TERM_PRIVACY,
  TERM_SERVICE,
} from '../../../constants';
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
import { createUserAtom } from '../../../recoil';
import { CreateUserType } from '../../../interface';

const Terms = () => {
  const ToFalse = true;
  const ToTrue = false;
  const router = useRouter();
  const [all, setAll] = useState<boolean>(false);
  const [service, setService] = useState<boolean>(false);
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<boolean>(false);
  const [createUser, setCreteUser] =
    useRecoilState<CreateUserType>(createUserAtom);

  const TermsColumnComponent = dynamic(
    () => import('../../../components/user/register/TermsColumn'),
    {
      ssr: false,
    }
  );

  const handleAllState: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setAll(!all);
    setPrivacy(!all);
    setMarketing(!all);
    setService(!all);
  };

  const handlePrivacyState: MouseEventHandler<HTMLButtonElement> = (event) => {
    setPrivacy(!privacy);
    if (privacy == ToFalse && all) {
      setAll(false);
    } else if (privacy == ToTrue && !all && marketing && service) {
      setAll(true);
    }
  };

  const handleServiceState: MouseEventHandler<HTMLButtonElement> = (event) => {
    setService(!service);
    if (service == ToFalse && all) {
      setAll(false);
    } else if (service == ToTrue && !all && privacy && marketing) {
      setAll(true);
    }
  };

  const handleMarketingState: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    setMarketing(!marketing);
    if (marketing == ToFalse && all) {
      setAll(false);
    } else if (marketing == ToTrue && !all && privacy && service) {
      setAll(true);
    }
  };

  const goToPasswordPage = async () => {
    if (service && privacy) {
      setCreteUser({
        ...createUser,
        termsOfMarketing: marketing,
      });
      await router.push(SIGNUP_PASSWORD, '/');
    }
  };

  return (
    <div>
      <AppBarWithBackArrow />
      <main className={styles.main_container}>
        <section className={styles.image_container}>
          <Image src={logo} alt={'??????'} layout={'responsive'} />
        </section>

        <section className={styles.guide_text}>
          ?????????! ?????? ?????? ????????????
          <br />??? ??????????????? ??????????????? :)
        </section>

        <section className={styles.terms_container}>
          <div className={styles.terms_title}>????????? ??????????????????</div>

          <div className={styles.terms_column_container}>
            <div className={styles.all_agree}>
              <TermsColumnComponent
                title={'?????? ???????????????'}
                arrow_visible={false}
                toggleValue={all}
                handleToggleValue={handleAllState}
              />
            </div>
            <TermsColumnComponent
              title={'(??????)?????????????????????'}
              arrow_visible={true}
              url={TERM_SERVICE}
              toggleValue={service}
              handleToggleValue={handleServiceState}
            />
            <TermsColumnComponent
              title={'(??????)???????????? ????????????'}
              arrow_visible={true}
              url={TERM_PRIVACY}
              toggleValue={privacy}
              handleToggleValue={handlePrivacyState}
            />
            <TermsColumnComponent
              title={'(??????)????????? ?????? ?????? ??????'}
              arrow_visible={true}
              url={TERM_MARKETING}
              toggleValue={marketing}
              handleToggleValue={handleMarketingState}
            />
          </div>

          <div className={styles.button_container}>
            <FullWidthButton
              variant={'contained'}
              text_color={'white'}
              padding={'15px 0'}
              disable={!(service && privacy)}
              onClick={goToPasswordPage}
            >
              ??????
            </FullWidthButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Terms;
