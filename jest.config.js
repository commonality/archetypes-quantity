const jest = {
  'automock': false,
  'collectCoverage': true,
  'coveragePathIgnorePatterns': [
    '<rootDir>/.gitlab/',
    '<rootDir>/dist/',
    '<rootDir>/docs/',
    '<rootDir>/lib/*/__tests__/__fixtures__/',
    '<rootDir>/lib/gitlab/__tests__/__fixtures__/',
    '<rootDir>/lib/*/__tests__/__mocks__/',
    '<rootDir>/node_modules'
  ],
  'coverageThreshold': {
    'global': {
      'branches': 100,
      'functions': 100,
      'lines': 100,
      'statements': 100
    }
  },
  'moduleDirectories': [
    'node_modules',
    'lib'
  ],
  'reporters': [
    'default',
    'jest-junit'
  ],
  'testEnvironment': 'node',
  'testPathIgnorePatterns': [
    '__fixtures__/',
    '__mocks__/',
    '/.gitlab/rc/',
    '/dist/',
    '/docs/',
    '/lib/gitlab/__tests__/__fixtures__/',
    '/node_modules/'
  ],
  'verbose': true,
  'watchman': false
}

module.exports = jest
