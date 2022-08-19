import React from 'react';
import styles from '../../styles/HomeProductBox.module.scss';
import Image from 'next/image';
import target from '../../public/assets/target.png';
import { LinearProgress } from '@mui/material';
import { Product } from '../../models/model/product';
import ProductViewModel from '../../models/view-model/product';

type ViewModel = {
  productViewModel: ProductViewModel;
};

const HomeProductBox = (props: ViewModel) => {
  const product: Product = props.productViewModel.get();
  const achievementRate = props.productViewModel.getAchievementRate();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.image_box}>
          <Image
            src={product.thumbnailImageUrl}
            layout={'fill'}
            alt={'프로젝트 썸네일 이미지'}
            className={styles.image}
          />
        </div>

        <div className={styles.title_box}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.location}> | {product.address}</span>
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
  );
};

export default HomeProductBox;
