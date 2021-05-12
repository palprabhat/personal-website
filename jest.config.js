module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  testMatch: ["**/__tests__/*.test.js?(x)"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  modulePaths: ["<rootDir>"],
  testURL: "http://localhost/",
  collectCoverageFrom: [
    "**[/components|/hooks|/pages/utils]?/*.{ts,tsx,js,jsx}",
  ],
  collectCoverage: false,
  coverageDirectory: "test_reports/coverage",
};
