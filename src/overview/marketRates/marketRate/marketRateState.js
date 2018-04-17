// @flow

export type MarketRateValue = {
  +[toCurrency: string]: number,
};

export type MarketRateMap = {
  +[fromCurrency: string]: MarketRateValue,
};

export type MarketRateState = {
  +rates: MarketRateMap,
  +error: ?string,
};

export const initialMarketRateState: MarketRateState = {
  rates: {},
  error: null,
};

export default initialMarketRateState;
