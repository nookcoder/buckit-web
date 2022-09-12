import React from 'react';
import InputPasswordLayout from '../../../layout/user/input-password.layout';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';

const Password = () => {
  // todo : 페이지 따로 만들지말고 여기서 신규/확인 기능 넣기
  // todo : 신규 비밀번호 입력하는 layout 만들기 -> 로그인 이후에도 쓰임
  return (
    <div>
      <AppBarWithBackArrow />
      <InputPasswordLayout layout_title={'신규 비밀번호 입력'} />
    </div>
  );
};

export default Password;
