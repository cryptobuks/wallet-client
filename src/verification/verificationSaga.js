// @flow

import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import { fetchVerificationRoutine } from './verificationRoutine';
import { initialVerificationState } from './verificationState';
import { getLatestVerification } from './verificationApi';
import type { FetchedVerification } from './verificationApi';

export function* verificationSaga(): Generator<IOEffect, void, *> {
  try {
    const verification: FetchedVerification = yield call(getLatestVerification);
    yield put(
      fetchVerificationRoutine.success({
        ...verification,
        verificationCreated: true,
      }),
    );
  } catch (error) {
    if (error.status === 404) {
      yield put(
        fetchVerificationRoutine.success({
          ...initialVerificationState,
          verificationCreated: false,
        }),
      );
    } else {
      console.error(error);
      yield put(fetchVerificationRoutine.failure());
    }
  }
}

function* getVerficationSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(fetchVerificationRoutine.TRIGGER, verificationSaga);
}

export default getVerficationSaga;
