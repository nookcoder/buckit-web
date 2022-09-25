import { UserModel } from '../model/user.model';

export class UserViewModel {
  userModel: UserModel;
  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  get() {
    return this.userModel.user;
  }

  getName() {
    return this.userModel.user.name;
  }

  getEmail() {
    return this.userModel.user.email;
  }

  getPoints() {
    return this.userModel.user.points;
  }

  getPhoneNumberWithHyphen() {
    return this.userModel.user.phoneNumber.replace(
      /^(\d{2,3})(\d{3,4})(\d{4})$/,
      `$1-$2-$3`
    );
  }
}
