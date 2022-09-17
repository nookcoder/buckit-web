import React from 'react';
import { Icon } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import styles from '../../../styles/components/common/InputPassword.module.scss';
import CircleIcon from '@mui/icons-material/Circle';

interface InputPasswordProps {
  value: string;
  shake?: boolean;
}

const InputPassword = ({ value, shake }: InputPasswordProps) => {
  // todo : shake 애니메이션 넣기
  // todo : 백 버튼 동작 넣기
  return (
    <div className={`${styles.container} ${shake ? styles.shake : ''}`}>
      <div>
        <Icon>
          {value.length >= 1 ? (
            <CircleIcon />
          ) : (
            <CircleOutlinedIcon></CircleOutlinedIcon>
          )}
        </Icon>
      </div>
      <div>
        <Icon>
          {value.length >= 2 ? (
            <CircleIcon />
          ) : (
            <CircleOutlinedIcon></CircleOutlinedIcon>
          )}
        </Icon>
      </div>
      <div>
        {value.length >= 3 ? (
          <CircleIcon />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
      <div>
        {value.length >= 4 ? (
          <CircleIcon />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
      <div>
        {value.length >= 5 ? (
          <CircleIcon />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
      <div>
        {value.length >= 6 ? (
          <CircleIcon />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
    </div>
  );
};

export default InputPassword;
