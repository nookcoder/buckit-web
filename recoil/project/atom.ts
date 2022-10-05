import { atom } from 'recoil';
import { OrderBy, ProjectStatus } from '../../constants';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

export const currentProjectIdAtom = atom({
  key: 'currentProjectId',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const qtyAtom = atom({
  key: 'inputBlockQty',
  default: '0',
  effects_UNSTABLE: [persistAtom],
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
