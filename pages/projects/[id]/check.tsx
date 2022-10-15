import React, { ChangeEvent, useEffect, useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import styles from '../../../styles/pages/CheckingPurchase.module.scss';
import { CircularProgress, Divider } from '@mui/material';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import UserCertificationInput from '../../../components/projects/user_certification_input';
import { useRecoilState } from 'recoil';
import { currentProjectIdAtom, orderAtom } from '../../../recoil';
import { UserViewModel } from '../../../models/view-model/user';
import ProjectViewModel from '../../../models/view-model/project';
import { getProjectById, getUserProfile } from '../../../api';
import { UserModel } from '../../../models/model/user.model';
import { ProjectModel } from '../../../models/model/project';
import Image from 'next/image';
import { useRouter } from 'next/router';
import test from '../../../public/assets/banner.png';
import PrecautionsGuidance from '../../../components/projects/precautions-guidance';
import AlertModal from '../../../components/common/modal/alert-modal';
import { OrderInputAtom } from '../../../interface';
import { TERM_SERVICE } from '../../../constants';
import dynamic from 'next/dynamic';

const CheckingPurchase = () => {
  const ProjectToggleInput = dynamic(
    () => import('../../../components/projects/toggle_input'),
    {
      ssr: false,
    }
  );

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProjectId, setCurrentProjectId] =
    useRecoilState(currentProjectIdAtom);
  const [orderInput, setOrderInput] = useRecoilState<OrderInputAtom>(orderAtom);
  const [userCheckModal, setUserCheckModal] = useState(false);
  const [termsCheckModal, setTermsCheckModal] = useState(false);
  const [userViewModel, setUserViewModel] = useState<UserViewModel>();
  const [projectViewModel, setProjectViewModel] = useState<ProjectViewModel>();
  const [email, setEmail] = useState({
    value: '',
    isCheck: false,
    error: false,
  });
  const [phone, setPhone] = useState({
    value: '',
    isCheck: false,
    error: false,
  });
  const [address, setAddress] = useState<string>('');
  const [terms, setTerms] = useState({
    privacy: false,
    purchase: false,
    notice: false,
  });

  const init = async () => {
    const user = await getUserProfile();
    if (user) {
      const userModel = new UserModel(user);
      setUserViewModel(new UserViewModel(userModel));
    }

    const project = await getProjectById(currentProjectId);
    if (project) {
      const projectModel = new ProjectModel(project);
      setProjectViewModel(new ProjectViewModel(projectModel));
      setOrderInput({
        ...orderInput,
        total: Math.round(
          projectModel.get().pricePerQuarter * +orderInput.quarter_qty * 1.033
        ),
      });
    }

    setIsLoading(false);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone({
      ...phone,
      value: value,
    });
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail({
      ...email,
      value: value,
    });
  };

  const checkPhone = () => {
    if (userViewModel && phone.value === userViewModel.get().phoneNumber) {
      setPhone({
        ...phone,
        isCheck: true,
        error: false,
      });
      return;
    }

    setPhone({
      ...phone,
      error: true,
    });
  };

  const checkEmail = () => {
    if (userViewModel && email.value === userViewModel.get().email) {
      setEmail({
        ...email,
        isCheck: true,
        error: false,
      });
      return;
    }

    setEmail({
      ...email,
      error: true,
    });
  };

  const goToPayment = () => {
    if (
      phone.isCheck &&
      email.isCheck &&
      terms.purchase &&
      terms.privacy &&
      terms.notice &&
      projectViewModel
    ) {
      router.push(`/projects/${projectViewModel.get().id}/payments`);
      return;
    }

    if (!phone.isCheck || !email.isCheck) {
      setUserCheckModal(true);
      return;
    }

    if (!terms.purchase || !terms.privacy || !terms.notice) {
      setTermsCheckModal(true);
      return;
    }
    return;
  };

  useEffect(() => {
    if (isLoading) {
      init().catch((err) => router.push('/'));
    }
  });

  return (
    <div>
      <AppBarWithBackArrow title={'사장되기'} />
      {isLoading || projectViewModel === undefined ? (
        <CircularProgress />
      ) : (
        <main>
          <header className={styles.header}>
            <div className={styles.image_container}>
              <Image
                src={projectViewModel.getThumbnailImage()}
                alt={'프로젝트 썸네일'}
                layout={'fill'}
                unoptimized={true}
              />
            </div>
            <div className={styles.project_summary}>
              <div className={styles.project_location}>
                {projectViewModel.getLocation()} |{' '}
                {projectViewModel.get().category.name}
              </div>
              <div className={styles.project_title}>
                {projectViewModel.getTile()}
              </div>
              <div className={styles.project_progress}>
                <div className={styles.project_progress_text}>
                  <span style={{ color: 'green' }}>
                    {projectViewModel.getAchievementRate()}%
                  </span>{' '}
                  달성 / {projectViewModel.get().total / 100000000}억
                </div>
                <div className={styles.project_progress_text}>
                  {projectViewModel.getRemainingDays()}
                </div>
              </div>
            </div>
          </header>

          <Divider variant={'fullWidth'} sx={{ marginTop: 3 }} />

          <section className={styles.certification_container}>
            <h3 className={styles.certification_title}>구매자 정보 인증</h3>
            <UserCertificationInput
              onChange={onChangePhone}
              title={'연락처'}
              onClick={checkPhone}
              input={phone}
            />
            <UserCertificationInput
              onChange={onChangeEmail}
              title={'이메일'}
              onClick={checkEmail}
              input={email}
            />
          </section>

          <Divider variant={'fullWidth'} sx={{ marginTop: 3 }} />

          <section className={styles.total_container}>
            <h3 className={styles.total_title}>결제사항</h3>
            <div className={styles.total_box}>
              <div className={styles.total_text}>
                <span style={{ color: 'green' }}>최종 결제 금액</span>
              </div>
              <div className={styles.total_text}>
                {projectViewModel.getPurchasePrice(orderInput.quarter_qty)}원
              </div>
            </div>
            <div
              style={{
                opacity: 0.6,
              }}
            >
              최종 결제 금액은 구매 블럭 가격에 구매 수수료 3.3%가 포함된
              금액입니다.
            </div>
            <div>
              <PrecautionsGuidance />
              <div>
                <ProjectToggleInput
                  url={
                    'https://docs.google.com/document/d/1y_S22Ki4PBzrEOW38jyKuw-97HirvtBYvNxjjBk-ovk/edit?usp=sharing'
                  }
                  title={'개인정보 제 3자 제공 동의'}
                  type={'privacy'}
                  selected={terms}
                  setSelected={setTerms}
                />
                <ProjectToggleInput
                  url={
                    'https://docs.google.com/document/d/1-LUqzo8WFWqa6JbrGkbQ_9MYFaLuDUIHH_5lwc0IBd8/edit?usp=sharing'
                  }
                  title={'공동 구매 약관'}
                  type={'purchase'}
                  selected={terms}
                  setSelected={setTerms}
                />
                <ProjectToggleInput
                  url={
                    'https://docs.google.com/document/d/10fRMB5Jmgc1jIqG-6lVjArtTXGNJVwUmCieIhIDBqRE/edit?usp=sharing'
                  }
                  title={'유의사항 및 환불정책'}
                  type={'notice'}
                  selected={terms}
                  setSelected={setTerms}
                />
              </div>
            </div>
          </section>

          <section className={styles.button_container}>
            <div className={styles.button_box}>
              <FullWidthButton
                variant={'contained'}
                text_color={'white'}
                onClick={goToPayment}
              >
                사장되기
              </FullWidthButton>
            </div>
          </section>
          <AlertModal
            title={'모든 항목에 동의해주세요'}
            open={termsCheckModal}
            setOpen={setTermsCheckModal}
          />
          <AlertModal
            title={'구매자 정보를 인증해주세요'}
            open={userCheckModal}
            setOpen={setUserCheckModal}
          />
        </main>
      )}
    </div>
  );
};

export default CheckingPurchase;
