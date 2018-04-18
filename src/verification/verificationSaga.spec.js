// @flow

import { call, put } from 'redux-saga/effects';
import { fetchVerificationRoutine } from './verificationRoutine';
import { getLatestVerification } from './verificationApi';
import { verificationSaga } from './verificationSaga';

describe('verification saga', () => {
  const id = 1;
  const userId = 2;
  const status = 'NEW';
  const verificationCreated = true;
  const apiResponse = { id, status, userId };

  it('works', () => {
    const generator = verificationSaga();

    expect(generator.next().value).toEqual(call(getLatestVerification));
    expect(generator.next(apiResponse).value).toEqual(
      put(
        fetchVerificationRoutine.success({
          ...apiResponse,
          verificationCreated,
        }),
      ),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
