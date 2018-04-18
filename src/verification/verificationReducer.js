// @flow
import type RoutineAction from 'redux-saga-routines';
import {
  type VerificationState,
  initialVerificationState,
} from './verificationState';
import { fetchVerificationRoutine } from './verificationRoutine';

const verificationReducer = (
  state: VerificationState = initialVerificationState,
  action: RoutineAction,
): VerificationState => {
  switch (action.type) {
    case fetchVerificationRoutine.SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        status: action.payload.status,
        verificationCreated: action.payload.verificationCreated,
        error: null,
      };

    case fetchVerificationRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default verificationReducer;
