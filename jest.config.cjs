module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/docs/'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    // '\\.scss$': 'identity-obj-proxy',
    '\\.svg$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.cjs',
    '\\.[jt]sx?$': 'babel-jest',
  },
};
