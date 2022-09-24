import { atom } from 'recoil';
import { OrderBy, ProjectStatus } from '../../constants';

export const currentProjectIdAtom = atom({
  key: 'currentProjectId',
  default: 0,
});

export const getProjectQueryAtom = atom({
  key: 'getProjectQuery',
  default: {
    pageSize: 15,
    page: 0,
    status: ProjectStatus.Any,
    order: OrderBy.CREATED_AT,
  },
});
