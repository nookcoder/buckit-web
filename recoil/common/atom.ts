import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

export const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

export const eventPopupAtom = atom({
  key: 'eventpopupAtom',
  default: true,
  // effects_UNSTABLE: [persistAtom],
});
