import React from 'react';
import styles from '../../styles/components/home/BuckitNews.module.scss';
import { NextRouter } from 'next/router';

interface BuckitNewsProps {
  router: NextRouter;
  projectId: number | undefined;
}

const BuckitNews = ({ router, projectId }: BuckitNewsProps) => {
  const onClickFirstBox = () => {
    return (window.location.href =
      'https://blog.naver.com/buckit/222889292516');
  };

  const onClickSecondBox = () => {
    return router.push(`/projects/${projectId}`);
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
          APP처럼
          <br />
          사용하기📌
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
          살펴보기👀
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
          구경가기🏠
        </div>
      </div>
    </>
  );
};

export default BuckitNews;
