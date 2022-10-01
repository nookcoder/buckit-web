import React, { useEffect, useState } from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import styles from '../../../styles/pages/ProjectDetail.module.scss';
import { CircularProgress, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import { ProjectModel } from '../../../models/model/project';
import ProjectViewModel from '../../../models/view-model/project';
import ProjectDetailLayout from '../../../layout/projects/project_detail';
import { useRouter } from 'next/router';
import {
  getProjectById,
  getUserProfile,
  toggleLikeProject,
} from '../../../api';
import { ProjectStatus } from '../../../constants';
import { UserModel } from '../../../models/model/user.model';
import { UserViewModel } from '../../../models/view-model/user';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLike, setIsLike] = useState<boolean | undefined>();
  const [projectViewModel, setProjectViewModel] = useState<ProjectViewModel>();

  const [userViewModel, setUserViewModel] = useState<UserViewModel>();
  const user = userViewModel?.get();

  const project = projectViewModel?.get();

  const onClickLike = async () => {
    if (!isLogin) {
      await router.push('/user');
      return;
    }

    if (project) {
      const isLike = await toggleLikeProject(project.id);
      setIsLike(isLike);
    }
  };

  const init = async () => {
    if (id) {
      const project = await getProjectById(+id);
      if (project) {
        return new ProjectModel(project);
      }
    }
  };

  const initUser = async () => {
    return await getUserProfile().then((user) => {
      if (user) {
        setUserViewModel(new UserViewModel(new UserModel(user)));
        if (id && typeof id === 'string') {
          user.likes.filter((li) => li.projectId.toString() === id).length === 0
            ? setIsLike(false)
            : setIsLike(true);
        }
      }
    });
  };

  const onClick = () => {
    if (project?.status === ProjectStatus.Before) {
      window.Kakao.Channel.addChannel({
        channelPublicId: '_zniRxj',
      });
      return;
    }

    router.push(`/projects/${project?.id}/qty`);
  };

  useEffect(() => {
    if (isLoading || projectViewModel === undefined) {
      if (localStorage.getItem(`${process.env.REFRESH_COOKIE_KEY}`)) {
        setIsLogin(true);
        initUser().catch((err) => console.log(err));
      }
      init().then((res) => {
        if (res) {
          setProjectViewModel(new ProjectViewModel(res));
        }
        setIsLoading(false);
      });
    }
  }, [isLoading, router.query]);

  return (
    <div>
      {isLoading || projectViewModel === undefined ? (
        <CircularProgress></CircularProgress>
      ) : (
        <>
          <AppBarWithBackArrow title={projectViewModel.getTile()} />

          <main>
            <ProjectDetailLayout projectViewModel={projectViewModel} />
          </main>

          <footer className={styles.button_container}>
            <FullWidthButton
              variant={'contained'}
              text_color={'white'}
              onClick={onClick}
            >
              {project?.status === ProjectStatus.Before
                ? '플러스 친구 맺고 알림 신청하기 '
                : '사장되기'}
            </FullWidthButton>
            <IconButton onClick={onClickLike}>
              {isLike ? (
                <FavoriteIcon color={'error'} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </footer>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
