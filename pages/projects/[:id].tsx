import React from 'react';
import AppBarWithBackArrow from '../../components/nav/app_bar_with_back_arrow';
import styles from '../../styles/pages/ProjectDetail.module.scss';
import { IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FullWidthButton from '../../components/common/buttons/full_width_button';
import { ProductModel } from '../../models/model/product';
import ProductViewModel from '../../models/view-model/product';
import ProjectDetailLayout from '../../layout/projects/project_detail';

const ProjectDetail = () => {
  const productModel = new ProductModel();
  const productViewModel = new ProductViewModel(productModel);

  return (
    <div>
      <AppBarWithBackArrow title={productViewModel.getTile()} />

      <main>
        <ProjectDetailLayout projectViewModel={productViewModel} />
      </main>

      <footer className={styles.button_container}>
        <FullWidthButton
          background_color={'#4EB08B'}
          text_color={'white'}
          variant={'contained'}
          hover_color={'#4EB05F'}
        >
          사장되기
        </FullWidthButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </footer>
    </div>
  );
};

export default ProjectDetail;
