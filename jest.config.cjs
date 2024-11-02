module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@': '<rootDir>/src',
    //   '^.+\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // '\\.[jt]sx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
};
