import { selector } from 'recoil';
import { newPasswordAtom, newPasswordCheckAtom } from './atom';
import { BACK_SPACE } from '../index';

const NEW_PASSWORD_SELECTOR = 'NEW_PASSWORD_SELECTOR';
const NEW_PASSWORD_CHECK_SELECTOR = 'NEW_PASSWORD_CHECK_SELECTOR';

const newPasswordSelector = selector({
  key: NEW_PASSWORD_SELECTOR,
  get: ({ get }) => get(newPasswordAtom),
  set: ({ get, set }, newValue) => {
    if (newValue) {
      if (newValue === BACK_SPACE) {
        set(
          newPasswordAtom,
          get(newPasswordAtom).substring(0, get(newPasswordAtom).length - 1)
        );
        return;
      }
      set(newPasswordAtom, get(newPasswordAtom) + newValue);
      return;
    }

    set(newPasswordAtom, '');
    return;
  },
});

const newPasswordCheckSelector = selector({
  key: NEW_PASSWORD_CHECK_SELECTOR,
  get: ({ get }) => get(newPasswordCheckAtom),
  set: ({ get, set }, newValue) => {
    if (newValue) {
      if (newValue === BACK_SPACE) {
        set(
          newPasswordCheckAtom,
          get(newPasswordAtom).substring(
            0,
            get(newPasswordCheckAtom).length - 1
          )
        );
        return;
      }
      set(newPasswordCheckAtom, get(newPasswordCheckAtom) + newValue);
      return;
    }

    set(newPasswordCheckAtom, '');
    return;
  },
});

export { newPasswordSelector, newPasswordCheckSelector };
