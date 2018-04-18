// @flow

export type VerificationState = {
  verificationCreated: ?boolean,
  id: ?number,
  status: ?string,
  error: ?string,
};

export const initialVerificationState: VerificationState = {
  verificationCreated: null,
  id: null,
  status: null,
  error: null,
};
