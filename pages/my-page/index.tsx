import React, { useEffect, useState } from 'react';
import BottomNav from '../../components/nav/bottom_nav';
import AppBar from '../../components/nav/app_bar';
import { Button, CircularProgress, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import styles from '../../styles/pages/my-page/Mypage.module.scss';
import MyPageHistoryColumn from '../../components/my-page/mypage_column';
import UserInfoBox from '../../components/my-page/user-info-box';
import { useRouter } from 'next/router';
import UserPointBox from '../../components/my-page/user-point-box';
import { getUserProfile } from '../../api';
import { UserViewModel } from '../../models/view-model/user';
import { UserModel } from '../../models/model/user.model';
import OkModal from '../../components/common/modal/ok-modal';
import AlertModal from '../../components/common/modal/alert-modal';

const MyPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserViewModel>();
  const [modal, setModal] = useState(false);

  const init = async () => {
    const user = await getUserProfile();
    if (user) {
      return new UserModel(user);
    }
    await router.push('/user');
  };

  const onClickOrder = () => {
    router.push('/my-page/before-payment');
  };

  const onClickMyProject = async () => {
    return await router.push('/my-page/my-projects');
  };

  const onClickProfitHistory = async () => {
    setModal(true);
    // return await router.push('/my-page/profit-history');
  };

  useEffect(() => {
    const refreshToken = localStorage.getItem(
      `${process.env.REFRESH_COOKIE_KEY}`
    );
    if (!refreshToken) {
      router.push('/user');
    }

    if (isLoading) {
      setIsLoading(false);

      init()
        .then((model) => {
          if (model) {
            setUser(new UserViewModel(model));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <AppBar />
      <main className={styles.container}>
        <section>
          {isLoading || user === undefined ? (
            <CircularProgress />
          ) : (
            <>
              <UserInfoBox
                name={user.getName()}
                email={user.getEmail()}
                phoneNumber={user.getPhoneNumberWithHyphen()}
              />
              <UserPointBox name={user.getName()} points={user.getPoints()} />
            </>
          )}
        </section>
        {/*todo : 찜한 프로젝트 추가 예정*/}
        {/*<section>*/}
        {/*  <h3>찜한 프로젝트</h3>*/}
        {/*</section>*/}
        <section className={styles.history_container}>
          <h3>펀딩 내역</h3>
          <MyPageHistoryColumn
            title={'결제 전 프로젝트'}
            onClick={onClickOrder}
          />
          <MyPageHistoryColumn
            title={'펀딩 중인 프로젝트'}
            onClick={onClickMyProject}
          />
          <MyPageHistoryColumn
            title={'프로젝트 수익 내역'}
            onClick={onClickProfitHistory}
          />
        </section>
      </main>
      <BottomNav />
      <AlertModal
        title={'수익 내역이 없습니다'}
        open={modal}
        setOpen={setModal}
      />
    </div>
  );
};

export default MyPage;
