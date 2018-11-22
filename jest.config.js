module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: [
    'packages/{toolkit,termutil}/**/*.js',
    '!**/node_modules/**',
  ],
  roots: [
    '<rootDir>/packages/',
  ],
  testEnvironment: 'node',
  verbose: true,
};
