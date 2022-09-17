import { atom } from 'recoil';
import { UserRole } from '../../models/model/user.model';
import { recoilPersist } from 'recoil-persist';

const CURRENT_USER = 'CURRENT_USER';
const CREATE_USER = 'CREATE_USER';
const NEW_PASSWORD = 'NEW_PASSWORD';
const NEW_PASSWORD_CHECK = 'NEW_PASSWORD_CHECK';

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

const newPasswordAtom = atom({
  key: NEW_PASSWORD,
  default: '',
});

const newPasswordCheckAtom = atom({
  key: NEW_PASSWORD_CHECK,
  default: '',
});

export { createUserAtom, newPasswordAtom, newPasswordCheckAtom };
