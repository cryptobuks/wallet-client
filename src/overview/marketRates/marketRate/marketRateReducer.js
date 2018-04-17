// @flow

import type RoutineAction from 'redux-saga-routines';
import {
  type MarketRateState,
  initialMarketRateState,
} from './marketRateState';
import { marketRateRoutine } from './marketRateRoutine';

const marketRateReducer = (
  state: MarketRateState = initialMarketRateState,
  action: RoutineAction,
): MarketRateState => {
  switch (action.type) {
    case marketRateRoutine.SUCCESS:
      return {
        ...state,
        rates: {
          ...state.rates,
          [action.payload.fromCurrency]: {
            ...state.rates[action.payload.fromCurrency],
            [action.payload.toCurrency]: action.payload.exchangeRate,
          },
        },
        error: null,
      };

    case marketRateRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default marketRateReducer;
