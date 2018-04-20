// @flow

export const required = (value: any) =>
  value ? undefined : "Don't forget this field :)";

export const requiredIdentityConfirmation = (value: any) =>
  value ? undefined : 'You must confirm your identity ';
