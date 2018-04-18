// @flow

import verificationReducer from './verificationReducer';
import { initialVerificationState } from './verificationState';
import { fetchVerificationRoutine } from './verificationRoutine';

describe('verification reducer', () => {
  const error = 'Problem';
  const initialState = initialVerificationState;
  const errorState = { ...initialVerificationState, error };
  const firstState = {
    id: 1,
    status: 'NEW',
    verificationCreated: true,
    error: null,
  };

  it('adds error to state', () => {
    const action = fetchVerificationRoutine.failure(error);

    const newState = verificationReducer(initialState, action);

    expect(newState).toEqual(errorState);
  });

  it('updates state and removes error from state on success', () => {
    const payload = {
      id: 1,
      status: 'NEW',
      verificationCreated: true,
    };
    const action = fetchVerificationRoutine.success(payload);

    const newState = verificationReducer(errorState, action);

    expect(newState).toEqual(firstState);
  });
});
