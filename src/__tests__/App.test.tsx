/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, toJSON } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  it('should render properly', () => {
    const { baseElement } = render(<App />);
    expect(toJSON(baseElement)).toMatchSnapshot();
  });
});
