import React, { useEffect, useRef, useState } from 'react';
import AppBarWithBackArrow from '../../components/nav/app_bar_with_back_arrow';
import styles from '../../styles/layout/MyProjectsLayout.module.scss';
import { FixedSizeList as List } from 'react-window';
import ProductViewModel from '../../models/view-model/project';

interface MyProjectsLayoutProps {
  title: string;
  children: React.ReactNode;
}

const MyProjectsLayout = ({ title, children }: MyProjectsLayoutProps) => {
  const [clientHeight, setClientHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [clientHeight]);

  return (
    <div>
      <AppBarWithBackArrow title={title} />
      {children}
    </div>
  );
};

export default MyProjectsLayout;
