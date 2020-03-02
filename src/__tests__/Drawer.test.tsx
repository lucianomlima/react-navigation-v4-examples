/**
 * @format
 */

import 'react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

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

describe('DrawerNavigator', () => {
  it('should render properly', () => {
    const DrawerNavigator = createDrawerNavigator({
      Home: TestScreen,
      Settings: AnotherScreen,
    });
    const rendered = renderWithNavigation(DrawerNavigator);
    expect(rendered.asJSON()).toMatchSnapshot();
  });
});
