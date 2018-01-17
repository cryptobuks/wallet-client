// @flow
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { push } from 'react-router-redux';
import confirmRoutine from './confirmRoutine';
import cardOrderApi from '../cardOrderApi';
import { routes } from '../../../router';

export function* createOrder(walletId: number): Generator<IOEffect, void, *> {
  try {
    yield call(cardOrderApi.createOrder, walletId);
    yield put(confirmRoutine.success());
    yield put(push(routes.CARD));
  } catch (error) {
    yield put(confirmRoutine.failure(error));
    console.error(error);
  }
}

function* validate(action: RoutineAction): Generator<IOEffect, void, *> {
  const walletId = action.payload;
  yield call(createOrder, walletId);
  yield put(confirmRoutine.fulfill());
}

function* createConfirmSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(confirmRoutine.TRIGGER, validate);
}

export default createConfirmSaga;
