import { coreGetWithAuth, corePostWithAuth } from '../core/core-axios.api';
import { Shares } from '../../models/model/share';

export const getMyShares = async () => {
  const response = await coreGetWithAuth('/api/v1/share/mine');
  return response.data;
};

export const getMyShare = async (shareId: number) => {
  const response = await coreGetWithAuth(`/api/v1/share/mine/${shareId}`);
  return response.data;
};
