// @flow

import React from 'react';
import { Route } from 'react-router';
import appWrapper from '../appWrapper';
import Intro from './intro';
import verificationFlow from './VerificationFlow';
import requireAuthentication from '../requireAuthentication';
import {
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_CHOOSE_ROUTE,
  VERIFICATION_PASSPORT_VERIFICATION_ROUTE,
  VERIFICATION_DRIVING_LICENSE_VERIFICATION_ROUTE,
  VERIFICATION_ID_FRONT_VERIFICATION_ROUTE,
  VERIFICATION_ID_BACK_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_CONFIRM_ROUTE,
  VERIFICATION_SELFIE_VERIFICATION_ROUTE,
} from './constants';
import Profile from './profile';
import AddressComponent from './address/AddressComponent';
import {
  ChooseDocumentType,
  IdFrontVerification,
  IdBackVerification,
  PassportVerification,
  DrivingLicenseVerification,
  AddressVerification,
  SelfieVerification,
} from './verificationFiles';
import Confirm from './confirm';

let key = 1;

const introRoute = (
  <Route
    key={(key += 1)}
    exact
    path={VERIFICATION_INTRO_ROUTE}
    component={appWrapper(requireAuthentication(verificationFlow(Intro)))}
  />
);

const profileRoute = (
  <Route
    key={(key += 1)}
    exact
    path={VERIFICATION_PROFILE_ROUTE}
    component={appWrapper(requireAuthentication(verificationFlow(Profile)))}
  />
);

const addressRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_ADDRESS_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(AddressComponent)),
    )}
  />
);

const chooseVerificationRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_CHOOSE_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(ChooseDocumentType)),
    )}
  />
);

const passportVerificationRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_PASSPORT_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(PassportVerification)),
    )}
  />
);

const drivingLicenseVerificationRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_DRIVING_LICENSE_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(DrivingLicenseVerification)),
    )}
  />
);

const idVerificationFrontRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_ID_FRONT_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(IdFrontVerification)),
    )}
  />
);

const idVerificationBackRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_ID_BACK_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(IdBackVerification)),
    )}
  />
);

const addressVerificationRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_ADDRESS_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(AddressVerification)),
    )}
  />
);

const selfieVerificationRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_SELFIE_VERIFICATION_ROUTE}
    component={appWrapper(
      requireAuthentication(verificationFlow(SelfieVerification)),
    )}
  />
);

const confirmRoute = (
  <Route
    key={(key += 1)}
    path={VERIFICATION_CONFIRM_ROUTE}
    component={appWrapper(requireAuthentication(verificationFlow(Confirm)))}
  />
);

export default [
  introRoute,
  profileRoute,
  addressRoute,
  chooseVerificationRoute,
  passportVerificationRoute,
  drivingLicenseVerificationRoute,
  idVerificationFrontRoute,
  idVerificationBackRoute,
  addressVerificationRoute,
  selfieVerificationRoute,
  confirmRoute,
];
