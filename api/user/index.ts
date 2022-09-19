import { CreateUserType, LoginInput } from '../../interface';
import { corePost } from '../core/core-axios.api';
import { UpdatePassword } from '../../interface/user/user.interface';

const login = async (body: LoginInput) => {
  return await corePost('/api/v1/auth/login', body);
};

const createNewUser = async (body: CreateUserType) => {
  return await corePost('/api/v1/auth/sign-up', body);
};

const updatePassword = async (body: UpdatePassword) => {
  return corePost('/api/v1/users/update-password', body);
};

const callbackCreateNewUser = (res: any) => {
  console.log(res);
};

export { createNewUser, login, updatePassword };
