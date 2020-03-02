jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);
