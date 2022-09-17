interface CheckUserExistResponse {
  error?: string;
  ok: boolean;
  existence: boolean;
  userId?: number | string;
}

export type { CheckUserExistResponse };
