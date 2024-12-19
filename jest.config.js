module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
  };
  