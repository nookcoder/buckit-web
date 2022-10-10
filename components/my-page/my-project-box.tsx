import React, { CSSProperties } from 'react';
import { useRouter } from 'next/router';
import { Share } from '../../models/model/share';
import styles from '../../styles/components/my-page/MyProjectBox.module.scss';
import Image from 'next/image';
import test from '../../public/assets/banner.png';
import { withComma } from '../../utils';

interface MyProjectBoxProps {
  index: number;
  style: CSSProperties;
  share: Share;
}

const MyProjectBox = ({ index, style, share }: MyProjectBoxProps) => {
  const router = useRouter();

  const goToMyProjectDetail = () => {
    router.push(`/my-page/my-projects/${share.get().id}`);
  };

  return (
    <div key={index} style={style} onClick={goToMyProjectDetail}>
      <div className={styles.order_content}>
        <div className={styles.order_thumbnail} aria-label={'thumbnail'}>
          <Image
            src={test}
            layout={'fill'}
            className={styles.auto_image}
            alt={'프로젝트 썸네일'}
          />
        </div>
        <div className={styles.mobile_font_size} aria-label={'content'}>
          <div className={styles.order_title}>{share.get().project.title}</div>
          <div className={styles.order_content_col}>
            총 블럭 수 : {withComma(share.get().total_share_number.toString())}
            개
          </div>
          <div className={styles.order_content_col}>
            <span className={styles.order_price}>
              총 금액 :{' '}
              {withComma(
                (
                  share.get().total_share_number *
                  share.get().project.pricePerQuarter
                ).toString()
              )}
              원{' '}
            </span>
          </div>
          <div className={`${styles.funding_status_box}`}>
            <span className={styles.funding_project_status}>
              {share.getStatus()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectBox;
