import React, { ReactElement, useEffect, useRef, useState } from 'react';
import MyProjectsLayout from '../../../layout/my-page/my_projects_layout';
import NoFoundProjects from '../../../layout/my-page/no-found-projects';
import { useRouter } from 'next/router';
import { getMyShares } from '../../../api';
import styles from '../../../styles/components/my-page/MyProjectBox.module.scss';
import { FixedSizeList as List } from 'react-window';
import { Share, Shares } from '../../../models/model/share';
import { CircularProgress } from '@mui/material';
import MyProjectBox from '../../../components/my-page/my-project-box';
import { IShare } from '../../../interface/share ';

const Index = () => {
  const router = useRouter();
  const [clientHeight, setClientHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [myShares, setShares] = useState<Shares>();
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    if (isLoading) {
      setIsLoading(false);
      const shares: IShare[] = await getMyShares();
      setShares(new Shares(shares));
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }
    init();
  }, [isLoading]);

  return (
    <div>
      <main ref={containerRef} className={styles.container}>
        <h3 className={styles.sub_title}>프로젝트 내역</h3>
        {isLoading || myShares === undefined ? (
          <CircularProgress></CircularProgress>
        ) : myShares.get().length > 0 ? (
          <List
            itemSize={155}
            height={clientHeight - 50}
            itemCount={myShares.get().length}
            width={'100%'}
          >
            {({ index, style }) => (
              <MyProjectBox
                index={index}
                style={style}
                share={new Share(myShares.get()[index])}
              />
            )}
          </List>
        ) : (
          <NoFoundProjects router={router} />
        )}
      </main>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MyProjectsLayout title={'영업 중인 프로젝트'}>{page}</MyProjectsLayout>
  );
};

export default Index;
