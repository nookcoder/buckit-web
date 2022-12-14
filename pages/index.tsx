import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import BottomNav from '../components/nav/bottom_nav';
import { Project, ProjectModel } from '../models/model/project';
import 'swiper/css';
import Banner from '../components/common/banner/banner';
import AppBar from '../components/nav/app_bar';
import HomeProductBox from '../components/home/homeProductBox';
import BuckitNews from '../components/home/buckit_news';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAllProjects } from '../api';
import { useRecoilState } from 'recoil';
import { currentProjectIdAtom, getProjectQueryAtom } from '../recoil';
import { CircularProgress } from '@mui/material';
import ProjectViewModel from '../models/view-model/project';
import PrepareNotificationModal from '../components/common/modal/prepare-notification-modal';
import EventPopup, {
  DONT_SHOW_POPUP,
} from '../components/common/modal/event-popup';
import { eventPopupAtom } from '../recoil/common/atom';
import { Cookies } from 'react-cookie';

const Home: NextPage = () => {
  const router = useRouter();
  const [currentProjectId, setCurrentProjectId] =
    useRecoilState(currentProjectIdAtom);
  // todo : 추천 프로젝트로 쿼리 변경
  const [query, setQuery] = useRecoilState(getProjectQueryAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [productModel, setProductModel] = useState<ProjectModel>();
  const [productViewModel, setProductViewModel] = useState<ProjectViewModel>();
  const [modalState, setModalState] = useState<boolean>(false);
  const [eventPopup, setEventPopup] = useRecoilState(eventPopupAtom);
  const cookies = new Cookies();

  const openModal = () => {
    setModalState(true);
  };

  const goToProjectDetail = async (projectId: number) => {
    await router
      .push(`/projects/${projectId}`)
      .then(() => {
        setCurrentProjectId(projectId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickEventBanner2 = async () => {
    return await router
      .push(`/projects/${productModel?.get().id}`)
      .then(() => {
        setCurrentProjectId(productModel?.get().id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const init = async () => {
    const projects = await getAllProjects(query);
    if (projects) {
      const product: Project = projects[0];
      setProductModel(new ProjectModel(product));
    }

    if (cookies.get(DONT_SHOW_POPUP) !== undefined) {
      setEventPopup(false);
    }
  };

  useEffect(() => {
    init()
      .then(() => {
        if (productModel) {
          setProductViewModel(new ProjectViewModel(productModel));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        alert('서버 에러입니다. 관리자에게 문의해주세요');
      });
  }, [isLoading]);

  return (
    <div className={styles.container}>
      <Head>
        <title>버킷 - 로컬비즈니스 공동구매 플랫폼</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/ic_launcher.png" />
      </Head>
      <main>
        <div>
          <AppBar />

          <Banner onClickEventBanner2={onClickEventBanner2} />

          <h3 className={styles.recommend_title}>
            사장님 이 프로젝트는 어때요?
          </h3>
          {productViewModel === undefined || isLoading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <HomeProductBox
              productViewModel={productViewModel}
              onClick={goToProjectDetail}
            />
          )}

          <h3 className={styles.recommend_title}>버킷 뉴스</h3>
          <div className={styles.news_container}>
            <BuckitNews
              projectId={productViewModel?.get().id}
              router={router}
            />
          </div>

          <div className={styles.company_information}>
            주식회사 버닝서프라이즈
            <br />
            서울특별시 서대문구 연세로2다길 19, 201호
            <br />
            대표자 : 최단비 | 사업자등록번호 : 678-88-02357
            <br />
            대표 번호 : 070-8095-2257
            <br />
            통신판매업신고 2022-서울서대-1626호
          </div>

          <BottomNav />
        </div>
        <PrepareNotificationModal open={modalState} setOpen={setModalState} />
      </main>
      <EventPopup
        state={eventPopup}
        setState={setEventPopup}
        onClick={onClickEventBanner2}
      />
    </div>
  );
};

export default Home;
