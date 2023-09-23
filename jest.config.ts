/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.ts"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
}
