import { coreGet } from '../core/core-axios.api';
import { CheckUserExistResponse } from '../../interface';

interface UserInfo {
  email?: string;
  phoneNumber?: string;
}

export const isExistUser = async (userInfo: UserInfo): Promise<boolean> => {
  const { email, phoneNumber } = userInfo;
  let url: string;
  if (email) {
    url = `/api/v1/users/check?email=${email}`;
  } else {
    url = `/api/v1/users/check?phoneNumber=${phoneNumber}`;
  }
  return await coreGet(url)
    .then((res) => {
      const data: CheckUserExistResponse = res.data;
      if (!data.ok) {
        throw data.error;
      }
      return res.data.existence;
    })
    .catch((err) => {
      console.error(err);
    });
};
