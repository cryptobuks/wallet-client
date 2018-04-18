// @flow

import config from 'react-global-configuration';
import { post, get } from '../http';

export type VerificationType = {
  userId: number,
  id: number,
  externalId: string,
  status: string,
  checks: Array<any>,
};

export type FetchedVerification = {
  userId: number,
  id: number,
  status: string,
};

const createVerification = (userId: number): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/me/verification`, { userId });

export const getLatestVerification = (): Promise<FetchedVerification> =>
  get(`${config.get('apiUrl')}/v1/me/verifications/latest`);

export default { createVerification };
