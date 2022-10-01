import { CreateUserType, LoginInput } from '../../interface';
import { coreDelete, coreGetWithAuth, corePost } from '../core/core-axios.api';
import { UpdatePassword } from '../../interface/user/user.interface';
import { User } from '../../models/model/user.model';

const login = async (body: LoginInput) => {
  return await corePost('/api/v1/auth/login', body);
};

const createNewUser = async (body: CreateUserType) => {
  return await corePost('/api/v1/auth/sign-up', body);
};

const updatePassword = async (body: UpdatePassword) => {
  return corePost('/api/v1/users/update-password', body);
};

const getUserProfile = async () => {
  return coreGetWithAuth('/api/v1/users/profile')
    .then((res) => {
      const user: User = res.data;
      return user;
    })
    .catch((err) => {
      return undefined;
    });
};

const toggleLikeProject = async (projectId: number) => {
  return coreGetWithAuth(`/api/v1/like/${projectId}`).then((res) => {
    return res.data.ok;
  });
};

const deleteUser = async () => {
  return coreDelete('/api/v1/users').then((res) => {
    return res.data.ok;
  });
};

export {
  createNewUser,
  login,
  updatePassword,
  getUserProfile,
  toggleLikeProject,
  deleteUser,
};
