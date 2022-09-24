import { OrderBy, ProjectStatus } from '../../constants';
import { Project } from '../../models/model/project';

export interface Category {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
}

export interface GetAllProjectsQuery {
  status?: ProjectStatus | null;
  page?: number | null;
  pageSize?: number | null;
  order?: OrderBy | null;
}

export interface GetAllProjectsResponse {
  ok: boolean;
  projects?: Project[];
}

export interface GetProjectResponse {
  ok: boolean;
  project?: Project;
}
