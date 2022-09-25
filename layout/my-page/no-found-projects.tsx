import React from 'react';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import { NextRouter, useRouter } from 'next/router';
import styles from '../../styles/layout/my-page/NoFoundProjects.module.scss';

interface NoFoundProjectsProps {
  router: NextRouter;
}

const NoFoundProjects = ({ router }: NoFoundProjectsProps) => {
  const onClick = async () => {
    return await router.push('/projects');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        사장님
        <br />
        아직 프로젝트가 없어요 :(
      </div>

      <div className={styles.sub_title}>
        지금 바로 마음에 드는 프로젝트를 선택하고,
        <br />
        구매 예약을 진행하세요 !
      </div>

      <div className={styles.button_box}>
        <FullWidthButton
          variant={'contained'}
          text_color={'white'}
          onClick={onClick}
        >
          바로가기
        </FullWidthButton>
      </div>
    </div>
  );
};

export default NoFoundProjects;
