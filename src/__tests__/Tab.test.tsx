/**
 * @format
 */

import 'react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { renderWithNavigation } from './testUtils';

const AnotherScreen = () => (
  <View>
    <Text>Another Screen</Text>
  </View>
);

const TestScreen = () => (
  <View>
    <Text>Test Screen</Text>
  </View>
);

describe('TabNavigator', () => {
  it('should render properly', () => {
    const TabNavigator = createBottomTabNavigator({
      Tab1: AnotherScreen,
      Tab2: TestScreen,
    });
    const rendered = renderWithNavigation(TabNavigator);
    expect(rendered.asJSON()).toMatchSnapshot();
  });
});
