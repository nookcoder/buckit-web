import { OrderInput } from '../../interface';
import { coreGetWithAuth, corePostWithAuth } from '../core/core-axios.api';

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

export const getMyOrders = async () => {
  const response = await coreGetWithAuth('/api/v1/order/before-payment');
  return response.data;
};
