import { Project } from '../../models/model/project';
import { User } from '../../models/model/user.model';

export interface OrderInput {
  project_id: number;

  quarter_qty: number;

  buyer_name: string;

  buyer_bank: string;
}

export interface OrderInputAtom {
  quarter_qty: number;

  buyer_name: string;

  buyer_bank: string;

  total: number;
}

export interface IGetMyOrder {
  buyer_bank: string;
  buyer_name: string;
  createdAt: string;
  id: number;
  order_code: string;
  project: Project;
  project_id: number;
  quarter_price: number;
  quarter_qty: number;
  total_price: number;
  updatedAt: string;
  user: User;
  user_id: number;
}
