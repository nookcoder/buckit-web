import React, { MouseEventHandler } from 'react';
import styles from '../../styles/HomeProductBox.module.scss';
import Image from 'next/image';
import target from '../../public/assets/target.png';
import { LinearProgress } from '@mui/material';
import ProjectViewModel from '../../models/view-model/project';

type ViewModel = {
  productViewModel: ProjectViewModel;
  onClick: (projectId: number) => void;
};

const HomeProductBox = (props: ViewModel) => {
  const product = props.productViewModel.get();
  const achievementRate = props.productViewModel.getAchievementRate();
  const goToDetail: MouseEventHandler<HTMLDivElement> = () => {
    props.onClick(product.id);
  };

  return props.productViewModel ? (
    <div className={styles.container}>
      <div className={styles.box} onClick={goToDetail}>
        <div className={styles.image_box}>
          <Image
            src={product.thumbnailImage}
            layout={'fill'}
            alt={'프로젝트 썸네일 이미지'}
            className={styles.image}
          />
        </div>

        <div className={styles.title_box}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.location}>
            {' '}
            | {props.productViewModel.getLocation()}
          </span>
        </div>

        <div className={styles.progress_info_box}>
          <div className={styles.percentage}>{achievementRate}%</div>
          <div className={styles.day}>
            <Image src={target} width={14} height={12} alt={'남은 일 수'} />{' '}
            <span className={styles.day_text}>D-30</span>
          </div>
        </div>

        <LinearProgress
          color={'success'}
          variant={'determinate'}
          value={achievementRate}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HomeProductBox;
