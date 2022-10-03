import React from 'react';
import styles from '../../styles/layout/ProjectDetail.module.scss';
import Image from 'next/image';
import CustomLinearProgress from '../../components/common/progress/custom_linear_progress';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Project } from '../../models/model/project';
import ProductViewModel from '../../models/view-model/project';
import ProjectLocationMap from '../../components/projects/project-location-map';
import { ProjectStatus } from '../../constants';
import before2 from '../../public/assets/before2.png';

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
        {/*<Image*/}
        {/*  src={projectViewModel.getThumbnailImage()}*/}
        {/*  layout={'fill'}*/}
        {/*  alt={'프로젝트 이미지'}*/}
        {/*/>*/}
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

      <section className={styles.content_container}>
        {project?.status === ProjectStatus.Before ? (
          <>
            <div className={styles.aa}>
              <Image
                src={
                  'https://buckit-prod.s3.ap-northeast-2.amazonaws.com/content/before1.png'
                }
                alt={'프로젝트 상세 소개'}
                layout={'fill'}
              ></Image>
            </div>
            <section>
              <ProjectLocationMap
                address={project.address}
                project_status={project.status}
              />
            </section>
            <Image
              src={before2}
              alt={'프로젝트 상세 소개'}
              layout={'responsive'}
            ></Image>
          </>
        ) : (
          <section>
            {project.content.map((contentImage, index) => (
              <Image
                key={index}
                src={contentImage}
                layout={'fill'}
                alt={'프로젝트 설명'}
              />
            ))}
            <section>
              <ProjectLocationMap
                address={project.address}
                project_status={project.status}
              />
            </section>
          </section>
        )}
      </section>
    </div>
  );
};

export default ProjectDetailLayout;
