/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // ...
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default config
