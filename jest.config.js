const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    ...jestPreset.setupFiles,
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['./src/testSetup'],
  testMatch: ['**/__tests__/?(*.)+(test).{js,jsx,ts,tsx}'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|react-navigation|react-navigation-stack|react-navigation-drawer|@react-navigation/core|@react-navigation/native|react-native-gesture-handler|@react-native-community/masked-view)',
  ],
};
