import React from 'react';
import styles from '../../styles/components/projects/ProjectContainer.module.scss';
import { LinearProgress } from '@mui/material';
import Image from 'next/image';
import testImage from '../../public/상품_이미지.jpg';

interface ProjectBoxProps {
  location: string;
  category: string;
  title: string;
  achievementRate: number;
  total: number;
  deadline: string;
}

const ProjectBox = (props: ProjectBoxProps) => {
  return (
    <main className={styles.container}>
      <section className={styles.image_container}>
        <Image src={testImage} layout={'fill'} />
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
            <div>
              <span style={{ color: '#4EB08B' }}>{props.achievementRate}%</span>{' '}
              달성 / {props.total}억
            </div>
            <div>
              <span style={{ color: 'red' }}>{props.deadline}일</span> 남음
            </div>
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
