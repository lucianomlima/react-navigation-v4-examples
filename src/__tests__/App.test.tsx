/**
 * @format
 */

import 'react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { render, toJSON } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  it('should render properly', () => {
    const { baseElement } = render(<App />);
    expect(toJSON(baseElement)).toMatchSnapshot();
  });
});

const TestScreen = () => {
  return (
    <View>
      <Text>Test Screen</Text>
    </View>
  );
};

describe('StackNavigator', () => {
  it('should render properly', () => {
    const Navigator = createStackNavigator({
      Home: TestScreen,
    });
    const Container = createAppContainer(Navigator);
    const { baseElement } = render(<Container />);
    expect(toJSON(baseElement)).toMatchSnapshot();
  });
});

it('renders correctly', () => {
  renderer.create(<App />);
});
