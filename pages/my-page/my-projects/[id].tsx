import React, { useEffect, useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { Share } from '../../../models/model/share';
import test from '../../../public/assets/banner.png';
import Image from 'next/image';
import { getMyShare } from '../../../api/share';
import { useRouter } from 'next/router';
import { IShare } from '../../../interface/share ';
import { CircularProgress, Divider } from '@mui/material';
import styles from '../../../styles/pages/my-page/MyProjectDetail.module.scss';
import { withComma } from '../../../utils';

const MyProjectDetail = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [myShare, setMyShare] = useState<Share>();

  const init = async () => {
    if (!isLoading) {
      return;
    }

    setIsLoading(false);
    const { id } = router.query;
    if (id && typeof id === 'string') {
      const date: IShare = await getMyShare(+id);
      setMyShare(new Share(date));
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <AppBarWithBackArrow />
      <h3 className={styles.container}>구매 상세내역</h3>
      {isLoading || myShare === undefined ? (
        <CircularProgress></CircularProgress>
      ) : (
        <>
          <section className={styles.container}>
            <Image src={test} />

            <div
              className={styles.project_header}
              aria-label={'project-header'}
            >
              <div className={styles.project_address}>
                {myShare.getProject().address} |{' '}
                {myShare.getProject().category.name}
              </div>
              <div className={styles.project_status}>{myShare.getStatus()}</div>
            </div>

            <div className={styles.project_title} aria-label={'project-title'}>
              {myShare.getProject().title}
            </div>

            <div className={styles.project_content}>
              {myShare.getProject().summary}
            </div>
          </section>

          <Divider />

          <section className={styles.share_container}>
            <div className={styles.share_col}>
              <div>
                <span className={styles.share_col_title}>
                  프로젝트 총 블럭 수
                </span>
              </div>
              <div>
                {withComma(myShare.getProject().totalQuarter.toString())}개
              </div>
            </div>

            <div className={styles.share_col}>
              <div>
                <span className={styles.share_col_title}>
                  구매한 총 블럭 수
                </span>
              </div>
              <div>
                {withComma(myShare.get().total_share_number.toString())}개
              </div>
            </div>

            <div className={styles.share_col}>
              <div>
                <span className={styles.share_col_title}>구매한 총 금액</span>
              </div>
              <div>
                {withComma(
                  (
                    myShare.getProject().pricePerQuarter *
                    myShare.get().total_share_number
                  ).toString()
                )}
                원
              </div>
            </div>

            <div className={styles.share_col}>
              <div>
                <span className={styles.share_col_title}>구매일자</span>
              </div>
              <div>{myShare.getPurchaseDay()}</div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MyProjectDetail;
