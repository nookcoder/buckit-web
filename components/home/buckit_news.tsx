import React from 'react';
import styles from '../../styles/components/home/BuckitNews.module.scss';

const BuckitNews = () => {
  return (
    <>
      <div className={`${styles.news_box} ${styles.blue}`}>
        <div className={styles.news_text}>
          버킷
          <br />
          베타 서비스
          <br />
          오픈! 🎉
        </div>
      </div>
      <div className={`${styles.news_box} ${styles.red}`}>
        <div className={styles.news_text}>
          첫 번째
          <br />
          프로젝트
          <br />
          살펴보기 👀
        </div>
      </div>
      <div className={`${styles.news_box} ${styles.yellow}`}>
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
