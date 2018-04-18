// @flow

import config from 'react-global-configuration';
import type { VerificationType, FetchedVerification } from './verificationApi';
import verificationApi, { getLatestVerification } from './verificationApi';

jest.mock('../http');

const mockHttp = require('../http');

describe('verification api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  const testVerification: VerificationType = {
    userId: 1,
    id: 1,
    externalId: 'ad8781de-2cfe-11e8-b467-0ed5f89f718b',
    checks: [],
    status: 'NEW',
  };

  it('posts a new verification', () => {
    mockHttp.post = jest.fn(() => Promise.resolve(testVerification));

    return verificationApi
      .createVerification(1)
      .then(response => expect(response).toEqual(testVerification));
  });

  it('gets the latest verification', () => {
    const fetchedVerification: FetchedVerification = {
      userId: 1,
      id: 1,
      status: 'NEW',
    };

    mockHttp.get = jest.fn(() => Promise.resolve(fetchedVerification));

    return getLatestVerification().then(response =>
      expect(response).toEqual(fetchedVerification),
    );
  });
});
