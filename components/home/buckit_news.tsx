import React from 'react';
import styles from '../../styles/components/home/BuckitNews.module.scss';
import { NextRouter } from 'next/router';

interface BuckitNewsProps {
  router: NextRouter;
}

const BuckitNews = ({ router }: BuckitNewsProps) => {
  const onClickFirstBox = () => {
    return router.push('/projects');
  };

  const onClickSecondBox = () => {
    return router.push('/projects/1');
  };

  const onClickThirdBox = () => {
    return (window.location.href = ' https://blog.naver.com/buckit');
  };

  return (
    <>
      <div
        className={`${styles.news_box} ${styles.blue}`}
        onClick={onClickFirstBox}
      >
        <div className={styles.news_text}>
          버킷
          <br />
          베타 서비스
          <br />
          오픈! 🎉
        </div>
      </div>
      <div
        className={`${styles.news_box} ${styles.red}`}
        onClick={onClickSecondBox}
      >
        <div className={styles.news_text}>
          첫 번째
          <br />
          프로젝트
          <br />
          살펴보기 👀
        </div>
      </div>
      <div
        className={`${styles.news_box} ${styles.yellow}`}
        onClick={onClickThirdBox}
      >
        <div className={styles.news_text}>
          버킷
          <br />
          블로그
          <br />
          구경가기 🏠
        </div>
      </div>
    </>
  );
};

export default BuckitNews;
