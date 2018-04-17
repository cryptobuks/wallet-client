// @flow

import marketRateReducer from './marketRateReducer';
import { marketRateRoutine } from './marketRateRoutine';

describe('market rate reducer', () => {
  const error = 'Problem';
  const initialState = { rates: {}, error: null };
  const errorState = { rates: {}, error };
  const firstState = { rates: { BTC: { EUR: 100 } }, error: null };
  const secondState = { rates: { BTC: { EUR: 200 } }, error: null };
  const differentTargetCurrencyState = {
    rates: { BTC: { EUR: 200, GBP: 500 } },
    error: null,
  };

  it('adds error to state', () => {
    const action = marketRateRoutine.failure(error);

    const newState = marketRateReducer(initialState, action);

    expect(newState).toEqual(errorState);
  });

  it('updates state and removes error from state on success', () => {
    const payload = {
      fromCurrency: 'BTC',
      toCurrency: 'EUR',
      exchangeRate: 100,
    };
    const action = marketRateRoutine.success(payload);

    const newState = marketRateReducer(errorState, action);

    expect(newState).toEqual(firstState);
  });

  it('updates existing currency rate inside state', () => {
    const payload = {
      fromCurrency: 'BTC',
      toCurrency: 'EUR',
      exchangeRate: 200,
    };
    const action = marketRateRoutine.success(payload);

    const newState = marketRateReducer(firstState, action);

    expect(newState).toEqual(secondState);
  });

  it('adds another rate value for different target currency', () => {
    const payload = {
      fromCurrency: 'BTC',
      toCurrency: 'GBP',
      exchangeRate: 500,
    };
    const action = marketRateRoutine.success(payload);

    const newState = marketRateReducer(secondState, action);

    expect(newState).toEqual(differentTargetCurrencyState);
  });
});
