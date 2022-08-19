import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/layout/ListOfProjects.module.scss';
import { FixedSizeList as List } from 'react-window';
import ProjectBox from '../../components/projects/project_box';

const fakeArray = [
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
  {
    location: '마포구 연남동',
    category: '주점',
    title: '2030 취향저격 만화 주점',
    achievementRate: 99,
    total: 5,
    deadline: '30',
  },
];

interface ListProps {
  index: number;
  style: any;
}

const ProjectScrollWindow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);

  useEffect(() => {
    // todo : resize 시 clientHeight 다시 계산
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [clientHeight]);

  const Row = ({ index, style }: ListProps) => {
    const project = fakeArray[index];
    return (
      <div key={index} style={style}>
        <ProjectBox
          location={project.location}
          category={project.category}
          title={project.title}
          achievementRate={project.achievementRate}
          total={project.total}
          deadline={project.deadline}
        />
      </div>
    );
  };

  return (
    <div className={styles.scroll} ref={containerRef}>
      <List
        itemSize={114}
        height={clientHeight - 58}
        itemCount={fakeArray.length}
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  );
};

export default ProjectScrollWindow;
