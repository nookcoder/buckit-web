import React from 'react';
import styles from '../../styles/layout/ProjectDetail.module.scss';
import Image from 'next/image';
import testImag from '../../public/상품_이미지.jpg';
import CustomLinearProgress from '../../components/common/progress/custom_linear_progress';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import contentTestImage from '../../public/버킷 프로젝트(가안).jpg';
import { Product } from '../../models/model/product';
import ProductViewModel from '../../models/view-model/product';

interface ProjectDetailLayoutProps {
  projectViewModel: ProductViewModel;
}

const ProjectDetailLayout = ({
  projectViewModel,
}: ProjectDetailLayoutProps) => {
  const project: Product = projectViewModel.get();

  return (
    <div className={styles.container}>
      <section className={styles.image_container}>
        <Image src={testImag} layout={'fill'} alt={'프로젝트 이미지'} />
      </section>

      <section className={styles.summary_container}>
        <div className={styles.category}>
          {project.category} | {project.address}
        </div>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.summary}>{project.summary}</div>
      </section>

      <section className={styles.progress_container}>
        <div className={styles.progress_container_header}>
          <span>{project.deadline.toString()}일 남음</span>
          <span>
            <span style={{ color: '#4EB08B' }}>
              {projectViewModel.getAchievementRate()}%
            </span>{' '}
            달성
          </span>
        </div>
        <CustomLinearProgress thickness={10} borderRadius={10} value={10} />

        <div
          className={`${styles.target_container} ${styles.target_container1}`}
        >
          <PaidOutlinedIcon fontSize={'small'} />
          <span>목표 펀딩 금액 : {project.total}</span>
        </div>

        <div className={styles.target_container}>
          <CalendarTodayOutlinedIcon fontSize={'small'} />
          <span>마감일 : {project.deadline.toString()}</span>
        </div>
      </section>

      <section className={styles.content_container}>
        <Image
          src={contentTestImage}
          layout={'fill'}
          alt={'프로젝트 상세 설명'}
        />
      </section>
    </div>
  );
};

export default ProjectDetailLayout;
