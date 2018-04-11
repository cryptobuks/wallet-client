// @flow
import { mount } from 'enzyme';
import React from 'react';
import VerificationProgress, {
  Progress,
  ProgressBar,
  ProgressIndicator,
} from './VerificationProgress';

describe('Verification progress', () => {
  it('should render progress bar correctly when 50% complete', () => {
    const model = {
      current: 25,
      total: 50,
    };
    const component = mount(<VerificationProgress {...model} />);
    expect(component);
    const progress = component.find(Progress);
    expect(progress).toHaveText('50 %');
    const progressIndicator = component.find(ProgressIndicator);
    expect(progressIndicator).toHaveStyleRule('width', '50%');
    const progressBar = component.find(ProgressBar);
    expect(progressBar).toHaveStyleRule('width', '50%');
  });

  it('should render progress bar at 5% when progress less than 5%', () => {
    const model = {
      current: 1,
      total: 100,
    };
    const component = mount(<VerificationProgress {...model} />);
    expect(component);
    const progress = component.find(Progress);
    expect(progress).toHaveText('5 %');
    const progressIndicator = component.find(ProgressIndicator);
    expect(progressIndicator).toHaveStyleRule('width', '5%');
    const progressBar = component.find(ProgressBar);
    expect(progressBar).toHaveStyleRule('width', '95%');
  });

  it('should render progress bar at 100% when progress at 100%', () => {
    const model = {
      current: 25,
      total: 25,
    };
    const component = mount(<VerificationProgress {...model} />);
    expect(component);
    const progress = component.find(Progress);
    expect(progress).toHaveText('100 %');
    const progressIndicator = component.find(ProgressIndicator);
    expect(progressIndicator).toHaveStyleRule('width', '100%');
    const progressBar = component.find(ProgressBar);
    expect(progressBar).toHaveStyleRule('width', '0%');
  });
});
