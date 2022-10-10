import { IGetMyOrder } from '../../../interface/orders';

export class MyOrder {
  myOrder: IGetMyOrder;

  constructor(myOrder: IGetMyOrder) {
    this.myOrder = myOrder;
  }

  get() {
    return this.myOrder;
  }

  getRemainingTime() {
    const createdTime = new Date(this.myOrder.createdAt);
    const endTimeStamp = createdTime.setDate(createdTime.getDate() + 1);
    const endDate = new Date(endTimeStamp);
    const year = endDate.getFullYear();
    const month =
      endDate.getMonth() < 10 ? `0${endDate.getMonth()}` : endDate.getMonth();
    const date =
      endDate.getDate() < 10 ? `0${endDate.getDate()}` : endDate.getDate();
    const hour =
      endDate.getHours() < 10 ? `0${endDate.getHours()}` : endDate.getHours();
    const min =
      endDate.getMinutes() < 10
        ? `0${endDate.getMinutes()}`
        : endDate.getMinutes();
    return `${year}-${month} -${date} ${hour}:${min}`;
  }
}

export class GetMyOrders {
  getMyOrders: IGetMyOrder[];

  constructor(getMyOrders: IGetMyOrder[]) {
    this.getMyOrders = getMyOrders;
  }

  get() {
    return this.getMyOrders;
  }
}
