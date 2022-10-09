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
