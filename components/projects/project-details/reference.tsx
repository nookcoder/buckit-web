import React from 'react';
import styles from '../../../styles/pages/ProjectDetail.module.scss';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { IconButton } from '@mui/material';

// url : string[]
// url[] 로 컴포넌트 만들기
interface ProjectReferenceProps {
  url: string;
}

const ProjectReference = () => {
  const downloadReference = () => {
    const a = document.createElement('a');
    const url =
      'https://buckit-prod.s3.ap-northeast-2.amazonaws.com/report.pdf';
    a.href = url;
    a.download = 'report.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <h3>참고 문서</h3>
      <section className={styles.reference_box} aria-label={'reference_box'}>
        <div className={styles.reference_box_col_left}>
          <PictureAsPdfIcon color={'error'} />
          <span>상권분석 보고서</span>
        </div>

        <div>
          <IconButton onClick={downloadReference}>
            <VerticalAlignBottomIcon />
          </IconButton>
        </div>
      </section>
    </div>
  );
};

export default ProjectReference;
