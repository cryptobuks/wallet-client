// @flow

import { call, put, takeEvery, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { marketRateRoutine } from './marketRateRoutine';
import { getMarketRate } from './marketRateApi';

export function* marketRateSaga(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  const { fromCurrency, toCurrency } = action.payload;
  try {
    const marketRate = yield call(getMarketRate, fromCurrency, toCurrency);
    yield put(marketRateRoutine.success(marketRate));
  } catch (error) {
    console.error(error);
    yield put(marketRateRoutine.failure());
  }
}

function* getMarketRateSaga(): Generator<IOEffect, void, *> {
  yield takeEvery(marketRateRoutine.TRIGGER, marketRateSaga);
}

export default getMarketRateSaga;
