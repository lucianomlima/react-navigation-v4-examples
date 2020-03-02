/**
 * @format
 */

import 'react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import { renderWithNavigation } from './testUtils';

const AnotherScreen = () => {
  return (
    <View>
      <Text>Another Screen</Text>
    </View>
  );
};

const TestScreen = () => {
  return (
    <View>
      <Text>Test Screen</Text>
    </View>
  );
};

describe('SwitchNavigator', () => {
  it('should render properly', () => {
    const SwitchNavigator = createSwitchNavigator({
      Home: TestScreen,
      Settings: AnotherScreen,
    });
    const rendered = renderWithNavigation(SwitchNavigator);
    expect(rendered.asJSON()).toMatchSnapshot();
  });
});
