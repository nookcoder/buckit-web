import { coreGet } from '../core/core-axios.api';
import { CertificationResponse } from '../../interface';
const getUserCertificated = async (
  imp_uid: string,
  merchant_uid: string,
  success: boolean
): Promise<CertificationResponse> => {
  const response = await coreGet(
    `/api/v1/auth/certification?imp_uid=${imp_uid}&merchant_uid=${merchant_uid}&success=${success}`,
    null
  );
  return response.data;
};

export { getUserCertificated };
