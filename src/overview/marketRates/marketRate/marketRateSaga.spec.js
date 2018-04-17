// @flow

import { call, put } from 'redux-saga/effects';
import { marketRateRoutine } from './marketRateRoutine';
import { getMarketRate } from './marketRateApi';
import { marketRateSaga } from './marketRateSaga';

describe('market rate saga', () => {
  const fromCurrency = 'BTC';
  const toCurrency = 'EUR';
  const apiResponse = { fromCurrency, toCurrency, exchangeRate: 500 };

  it('works', () => {
    const generator = marketRateSaga(
      marketRateRoutine({ fromCurrency, toCurrency }),
    );

    expect(generator.next().value).toEqual(
      call(getMarketRate, fromCurrency, toCurrency),
    );
    expect(generator.next(apiResponse).value).toEqual(
      put(marketRateRoutine.success(apiResponse)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
