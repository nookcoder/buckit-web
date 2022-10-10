import { Project } from '../../models/model/project';

export interface IShare {
  id: number;
  createdAt: string;
  updatedAt: string;
  share_uuid: string;
  // 총 구매한 블럭 수
  total_share_number: number;
  project: Project;
  dividends?: IDividends[];
}

export interface IDividends {
  dividend_per_quarter: number;
  total_dividend: number;
}
