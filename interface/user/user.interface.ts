import { UserRole } from '../../models/model/user.model';

interface CreateUserType {
  name: string;
  birth: string;
  gender: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: UserRole;
  termsOfMarketing: boolean;
}

interface LoginInput {
  phoneNumber: string;
  password: string;
}

interface UpdatePassword {
  phoneNumber: string;
  password: string;
}

export type { CreateUserType, LoginInput, UpdatePassword };
