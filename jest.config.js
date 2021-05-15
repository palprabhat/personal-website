module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  testMatch: ["**/__tests__/*.test.js?(x)"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/components/$1",
    "@data/(.*)": "<rootDir>/data/$1",
    "@hooks/(.*)": "<rootDir>/hooks/$1",
    "@styles/(.*)": "<rootDir>/styles/$1",
    "@utils/(.*)": "<rootDir>/utils/$1",
  },
  testURL: "http://localhost/",
  collectCoverageFrom: [
    "**(/components|/hooks|/pages|/utils)/**/*.{ts,tsx,js,jsx}",
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    ".next",
    "test_reports",
    ".mock.js",
  ],
  collectCoverage: false,
  coverageDirectory: "test_reports/coverage",
};
