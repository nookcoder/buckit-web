import React from 'react';
import { Icon } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import styles from '../../../styles/components/common/InputPassword.module.scss';

const InputPassword = () => {
  // todo : shake 애니메이션 넣기
  // todo : 백 버튼 동작 넣기
  const passwordUi = () => {
    const password = [0, 0, 0, 0, 0, 0];
    return password.map((value, index, array) => (
      <div key={index}>
        <Icon>
          <CircleOutlinedIcon />
        </Icon>
      </div>
    ));
  };

  return <div className={styles.container}>{passwordUi()}</div>;
};

export default InputPassword;
