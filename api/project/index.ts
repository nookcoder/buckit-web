import { coreGet } from '../core/core-axios.api';
import { GET_ALL_PROJECT, OrderBy, ProjectStatus } from '../../constants';
import {
  GetAllProjectsQuery,
  GetProjectResponse,
} from '../../interface/project';
import { Project } from '../../models/model/project';

export const getAllProjects = async (query: GetAllProjectsQuery) => {
  const status = query.status ? query.status : ProjectStatus.Any;
  const page = query.page ? query.page : 0;
  const pageSize = query.pageSize ? query.pageSize : 15;
  const order = query.order ? query.order : OrderBy.CREATED_AT;

  return await coreGet(
    `${GET_ALL_PROJECT}?status=${status}&page=${page}&pageSize=${pageSize}&order=${order}`
  );
};

export const getProjectById = async (
  projectId: number
): Promise<Project | undefined> => {
  return await coreGet(`/api/v1/projects/nu/${projectId}`).then((res) => {
    const response: GetProjectResponse = res.data;
    if (response.ok && response.project) {
      return response.project;
    }

    return undefined;
  });
};
