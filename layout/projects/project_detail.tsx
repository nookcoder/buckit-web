import React from 'react';
import styles from '../../styles/layout/ProjectDetail.module.scss';
import Image from 'next/image';
import CustomLinearProgress from '../../components/common/progress/custom_linear_progress';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Project } from '../../models/model/project';
import ProductViewModel from '../../models/view-model/project';
import a1 from '../../public/assets/a1.png';
import a2 from '../../public/assets/a2.png';
import a3 from '../../public/assets/a3.png';
import a4 from '../../public/assets/a4.png';
import a5 from '../../public/assets/a5.png';
import a6 from '../../public/assets/a6.png';
import a7 from '../../public/assets/a7.png';

interface ProjectDetailLayoutProps {
  projectViewModel: ProductViewModel;
}

const ProjectDetailLayout = ({
  projectViewModel,
}: ProjectDetailLayoutProps) => {
  const project: Project = projectViewModel.get();

  return (
    <div className={styles.container}>
      <section className={styles.image_container}>
        <Image
          src={projectViewModel.getThumbnailImage()}
          layout={'fill'}
          alt={'프로젝트 이미지'}
          unoptimized={true}
        />
      </section>

      <section className={styles.summary_container}>
        <div className={styles.category}>
          {project.category.name} | {projectViewModel.getLocation()}
        </div>
        <div className={styles.title}>{projectViewModel.getTile()}</div>
        <div>
          <pre className={styles.summary}>{projectViewModel.getSummary()}</pre>
        </div>
      </section>

      <section className={styles.progress_container}>
        <div className={styles.progress_container_header}>
          <span>{projectViewModel.getRemainingDays()}</span>
          <span>
            <span style={{ color: '#4EB08B' }}>
              {projectViewModel.getProjectStatus()}
            </span>
          </span>
        </div>
        <CustomLinearProgress
          thickness={10}
          border_radius={10}
          value={projectViewModel.getAchievementRate()}
        />

        <div
          className={`${styles.target_container} ${styles.target_container1}`}
        >
          <PaidOutlinedIcon fontSize={'small'} />
          <span>모집 블럭 수 : {projectViewModel.getTotalBlock()} 개</span>
        </div>

        <div className={styles.target_container}>
          <CalendarTodayOutlinedIcon fontSize={'small'} />
          <span>{projectViewModel.getDeadline()}</span>
        </div>
      </section>

      {/*<section className={styles.content_container}>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a1}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a2}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a3}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a4}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a5}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a6}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.content_image_container}>*/}
      {/*    <Image*/}
      {/*      src={a7}*/}
      {/*      layout={'fill'}*/}
      {/*      className={styles.auto_image}*/}
      {/*      alt={'프로젝트 설명'}*/}
      {/*      unoptimized={true}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default ProjectDetailLayout;
