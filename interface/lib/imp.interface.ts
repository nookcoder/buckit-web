interface IMPResponse {
  success: boolean;
  imp_uid: string;
  merchant_uid: string;
  pg_provider: string;
  pg_type: string;
  error_code: string | null | number;
  error_msg: string | null;
}

export type { IMPResponse };
