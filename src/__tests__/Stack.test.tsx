/**
 * @format
 */

import 'react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { render, toJSON } from '@testing-library/react-native';

const TestScreen = () => {
  return (
    <View>
      <Text>Test Screen</Text>
    </View>
  );
};

describe('StackNavigator', () => {
  it('should render properly', () => {
    const StackNavigator = createStackNavigator({ Home: TestScreen });
    const App = createAppContainer(StackNavigator);
    const { baseElement } = render(<App />);
    expect(toJSON(baseElement)).toMatchSnapshot();
  });
});
