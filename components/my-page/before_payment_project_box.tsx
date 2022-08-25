import React, { CSSProperties } from 'react';
import ProjectBox from '../projects/project_box';
import styles from '../../styles/components/my-page/MyProjectBox.module.scss';
import ProductViewModel from '../../models/view-model/product';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface BeforePaymentProjectBoxProps {
  index: number;
  style: CSSProperties;
  projectViewModel: ProductViewModel;
}

const BeforePaymentProjectBox = ({
  index,
  style,
  projectViewModel,
}: BeforePaymentProjectBoxProps) => {
  const project = projectViewModel.get();

  return (
    <div key={index} style={style}>
      <ProjectBox
        location={project.address}
        category={project.category}
        title={project.title}
        achievementRate={projectViewModel.getAchievementRate()}
        total={project.total}
        deadline={project.deadline.toString()}
      />
      <section className={styles.project_box_bottom}>
        <div className={styles.account_container}>
          <div>가상 계좌 번호 : 국민은행 605079-58-605489</div>
          <div>
            <IconButton sx={{ padding: 0 }}>
              <ContentCopyIcon fontSize={'small'} />
            </IconButton>
          </div>
        </div>
        <div>유효기간 : 2022-06-05 23:30</div>
      </section>
    </div>
  );
};

export default BeforePaymentProjectBox;
