import React, { MouseEventHandler } from 'react';
import styles from '../../styles/HomeProductBox.module.scss';
import Image from 'next/image';
import target from '../../public/assets/target.png';
import { LinearProgress } from '@mui/material';
import ProjectViewModel from '../../models/view-model/project';
import { ProjectStatus } from '../../constants';

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
            src={props.productViewModel.getThumbnailImage()}
            layout={'fill'}
            alt={'프로젝트 썸네일 이미지'}
            className={styles.image}
          />
        </div>

        <div className={styles.title_box}>
          <span className={styles.title}>
            {props.productViewModel.getTile()}
          </span>
          <span className={styles.location}>
            {' '}
            | {props.productViewModel.getLocation()}
          </span>
        </div>

        <div className={styles.progress_info_box}>
          <div className={styles.day}>
            {props.productViewModel.get().status === ProjectStatus.Before ? (
              <></>
            ) : (
              <Image src={target} width={14} height={12} alt={'남은 일 수'} />
            )}
            <span className={styles.day_text}>
              {props.productViewModel.getRemainingDays()}
            </span>
          </div>
          <div className={styles.percentage}>
            {props.productViewModel.getProjectStatus()}
          </div>
        </div>

        <LinearProgress
          color={'success'}
          variant={'determinate'}
          value={props.productViewModel.getAchievementRate()}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HomeProductBox;
