import {
  createUserAtom,
  newPasswordAtom,
  newPasswordCheckAtom,
  userPhoneNumberAtom,
  userPasswordAtom,
} from './user';
import {
  newPasswordSelector,
  newPasswordCheckSelector,
  userPasswordSelector,
} from './user';

import {
  currentProjectIdAtom,
  getProjectQueryAtom,
  orderAtom,
} from './project/atom';

export {
  createUserAtom,
  newPasswordCheckAtom,
  newPasswordAtom,
  userPasswordAtom,
  userPhoneNumberAtom,
};
export { newPasswordSelector, newPasswordCheckSelector, userPasswordSelector };
export { currentProjectIdAtom, getProjectQueryAtom, orderAtom };

export const BACK_SPACE = 'BACK_SPACE';
export const MAX_QTY = 'MAX_QTY';
