import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/layout/ListOfProjects.module.scss';
import { FixedSizeList as List } from 'react-window';
import ProjectBox from '../../components/projects/project_box';
import { ProjectListViewModel } from '../../models/view-model/project-list';
import ProjectViewModel from '../../models/view-model/project';
import project from '../../models/view-model/project';
import { ProjectModel } from '../../models/model/project';

interface ListProps {
  index: number;
  style: any;
}

interface ProjectScrollWindowProps {
  projectListViewModel: ProjectListViewModel;
}

const ProjectScrollWindow = ({
  projectListViewModel,
}: ProjectScrollWindowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const projects = projectListViewModel?.get();

  useEffect(() => {
    // todo : resize 시 clientHeight 다시 계산
    if (containerRef.current) {
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [clientHeight]);

  const Row = ({ index, style }: ListProps) => {
    const projectViewModel = new ProjectViewModel(
      new ProjectModel(projects[index])
    );
    const project = projectViewModel.get();
    return (
      <div key={index} style={style}>
        <ProjectBox
          project={project}
          location={projectViewModel.getLocation()}
          category={project.category.name}
          title={projectViewModel.getTile()}
          achievementRate={projectListViewModel.getAchievementRate(project)}
          achievement={projectListViewModel.getAchievement(project)}
          deadline={projectListViewModel.getDeadline(project)}
          thumbnailImage={projectViewModel.getThumbnailImage()}
        />
      </div>
    );
  };

  return (
    <div className={styles.scroll} ref={containerRef}>
      <List
        itemSize={114}
        height={clientHeight - 58}
        itemCount={projectListViewModel.getCount()}
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  );
};

export default ProjectScrollWindow;
