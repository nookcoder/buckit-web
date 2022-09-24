import React from 'react';
import styles from '../../styles/components/projects/ProjectContainer.module.scss';
import { LinearProgress } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { Project } from '../../models/model/project';
import { ProjectStatus } from '../../constants';
import project from '../../models/view-model/project';

interface ProjectBoxProps {
  project: Project;
  location: string;
  category: string;
  title: string;
  achievement: string | undefined;
  achievementRate: number;
  deadline: string;
  thumbnailImage: string | StaticImageData;
}

const ProjectBox = (props: ProjectBoxProps) => {
  const getRemainingDays = (deadlineChar: string | Date) => {
    const now = new Date().getTime();
    const deadline = Date.parse(deadlineChar.toString());
    const differenceMs = Math.abs(deadline - now);
    return Math.ceil(differenceMs / (1000 * 3600 * 24));
  };
  const ProjectRemainingBox = (project: Project) => {
    switch (project.status) {
      case ProjectStatus.Before:
        return <div style={{ color: '#4EB08B' }}>오픈예정</div>;
      case ProjectStatus.FUNDING_PROGRESS:
        return (
          <div>
            <span style={{ color: 'red' }}>
              {getRemainingDays(project.deadline)}일
            </span>{' '}
            남음
          </div>
        );
      case ProjectStatus.FundingEnd:
        return <div style={{ color: 'green' }}>오픈준비중</div>;
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.image_container}>
        <Image src={props.thumbnailImage} layout={'fill'} />
      </section>

      <section className={styles.info_container}>
        <div className={styles.info_container_header}>
          <span>
            {props.location} | {props.category}
          </span>
        </div>

        <div className={styles.info_container_body}>
          <span>{props.title}</span>
        </div>

        <div className={styles.info_container_footer}>
          <div className={styles.info_container_footer_top}>
            <div>{props.achievement}</div>
            <div>{ProjectRemainingBox(props.project)}</div>
          </div>
          <div>
            <LinearProgress
              color={'success'}
              variant={'determinate'}
              value={props.achievementRate}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectBox;
