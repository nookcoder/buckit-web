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
  return (
    <div className={`${styles.container} ${shake ? styles.shake : ''}`}>
      <div>
        <Icon>
          {value.length >= 1 ? (
            <CircleIcon color={'success'} />
          ) : (
            <CircleOutlinedIcon></CircleOutlinedIcon>
          )}
        </Icon>
      </div>
      <div>
        <Icon>
          {value.length >= 2 ? (
            <CircleIcon color={'success'} />
          ) : (
            <CircleOutlinedIcon></CircleOutlinedIcon>
          )}
        </Icon>
      </div>
      <div>
        {value.length >= 3 ? (
          <CircleIcon color={'success'} />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
      <div>
        {value.length >= 4 ? (
          <CircleIcon color={'success'} />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
      <div>
        {value.length >= 5 ? (
          <CircleIcon color={'success'} />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
      <div>
        {value.length >= 6 ? (
          <CircleIcon color={'success'} />
        ) : (
          <CircleOutlinedIcon></CircleOutlinedIcon>
        )}
      </div>
    </div>
  );
};

export default InputPassword;
