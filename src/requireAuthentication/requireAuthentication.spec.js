import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { push } from 'react-router-redux';
import { routes } from '../router';

import requireAuthentication from './requireAuthentication';

describe('requireAuthentication higher-order component', () => {
  let component;
  let fakeReducer;
  let fakeStateGetter;
  let store;

  const FakeComponent = () => <h1>I am FakeComponent</h1>;
  const WrappedFakedComponent = requireAuthentication(FakeComponent);

  beforeEach(() => {
    fakeStateGetter = () => ({});
    fakeReducer = jest.fn(() => fakeStateGetter()); // redirection so we can return a new object.
    store = createStore(combineReducers({ login: fakeReducer }));
    component = mount(
      <Provider store={store}>
        <WrappedFakedComponent />
      </Provider>,
    );
  });

  it('does not render inner component if authentication is not given, redirecting instead', () => {
    expect(component.text()).not.toContain('I am FakeComponent');
    expect(fakeReducer).toHaveBeenCalledWith(
      fakeStateGetter(),
      push(routes.BASE),
    );
  });

  it('renders the inner component if authentication is given', () => {
    fakeStateGetter = () => ({ token: 'an existing token!' });
    fakeReducer.mockClear();
    store.dispatch({ type: 'this type will not be used!' }); // trigger update from fakeState
    expect(component.text()).toContain('I am FakeComponent');
    expect(fakeReducer).not.toHaveBeenCalledWith(
      fakeStateGetter(),
      push(routes.BASE),
    );

    // now we remove auth
    fakeStateGetter = () => ({ token: null });
    store.dispatch({ type: 'this type will not be used!' }); // trigger update from fakeState
    expect(component.text()).not.toContain('I am FakeComponent');
    expect(fakeReducer).toHaveBeenCalledWith(
      fakeStateGetter(),
      push(routes.BASE),
    );
  });
});
