import React from 'react';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import { TextField } from '@mui/material';

const LoginId = () => {
  return (
    <div>
      <AppBarWithBackArrow />
      <main>
        <div>
          <div>휴대폰 번호를 입력해주세요</div>
          <TextField></TextField>
        </div>
      </main>
    </div>
  );
};

export default LoginId;
