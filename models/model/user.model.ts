export class UserModel {
  user: User;
  constructor(user: User) {
    this.user = user;
  }
}

export type User = {
  id: number;
  uuid: string;
  name: string;
  gender: 'male' | 'female';
  birth: string;
  phoneNumber: string;
  email: string;
  role: UserRole;
  termsOfService: boolean;
  termsOfPrivacy: boolean;
  termsOfMarketing: boolean;
  points: number;
  like?: [];
};

export enum UserRole {
  Client = 'client',
  Admin = 'admin',
}
