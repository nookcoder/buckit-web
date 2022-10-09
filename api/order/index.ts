import { OrderInput } from '../../interface';
import { corePostWithAuth } from '../core/core-axios.api';
import { rejects, throws } from 'assert';

export const createOrder = async (input: OrderInput, errorCb: any) => {
  return await corePostWithAuth('/api/v1/order/new', input)
    .then((res) => {
      if (!res.data.ok) {
        throw new Error('Internal Server Error');
      }
    })
    .catch((err) => {
      errorCb();
    });
};
