import { atom } from 'recoil';
import { UserRole } from '../../models/model/user.model';
import { recoilPersist } from 'recoil-persist';

export const CURRENT_USER = 'CURRENT_USER';
export const CREATE_USER = 'CREATE_USER';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

const createUserAtom = atom({
  key: CREATE_USER,
  default: {
    name: '',
    birth: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: UserRole.Client,
    termsOfMarketing: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export { createUserAtom };
