import React from 'react';
import {
  createAppContainer,
  NavigationNavigator,
  NavigationProp,
  NavigationState,
} from 'react-navigation';
import { render } from '@testing-library/react-native';

export function renderWithNavigation(
  navigator: NavigationNavigator<any, NavigationProp<NavigationState>>
) {
  const App = createAppContainer(navigator);
  return { ...render(<App />), navigationContainer: App };
}
