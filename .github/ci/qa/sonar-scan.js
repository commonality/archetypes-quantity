const debug = require('debug')('archetypes:quantity:ci:qa:sonar')
import { K8S_SECRET_SONAR_TOKEN, SONAR_TOKEN, SONAR_ORGANIZATION, SONAR_PROJECT_KEY, SONAR_HOST_URL } from '../../../lib/env-config'

import { description, name, version } from '../../../package.json'
import gitRepoInfo from 'git-repo-info'
import { customScanner as sonarqubeScanner } from 'sonarqube-scanner'

const { branch } = gitRepoInfo()

const sonarAnalysisParams = {
  SONAR_BRANCH_NAME: branch,
  SONAR_PROJECT_DESCRIPTION: description,
  SONAR_PROJECT_NAME: name,
  SONAR_PROJECT_VERSION: version
}

const callback = platformExecutableOrCommand => {
  const SUCCESS = 0
  const FAILURE = 2
  let exitCode = SUCCESS
  try {
    console.log(platformExecutableOrCommand)
  } catch (err) {
    console.error(err)
    exitCode = FAILURE
  } finally {
    process.exit(exitCode)
  }
}

const token =
  K8S_SECRET_SONAR_TOKEN ||
  SONAR_TOKEN ||
  process.env.K8S_SECRET_SONAR_TOKEN ||
  process.env.SONAR_TOKEN

const options = {
  'sonar.eslint.reportPaths': 'eslint-report.json',
  'sonar.javascript.exclusions': 'coverage/**,**/__tests__/**/*,lib/env-config.js',
  'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  'sonar.links.ci': 'https://travis-ci.com/commonality/archetypes-quantity',
  'sonar.links.homepage':
    'https://github.com/commonality/archetypes-quantity#readme',
  'sonar.links.issue': 'https://github.com/commonality/archetypes-quantity/issues',
  'sonar.links.scm': 'https://github.com/commonality/archetypes-quantity',
  'sonar.login': token,
  'sonar.organization': SONAR_ORGANIZATION,
  'sonar.projectDescription': sonarAnalysisParams.SONAR_PROJECT_DESCRIPTION,
  'sonar.projectKey': SONAR_PROJECT_KEY,
  'sonar.projectName': sonarAnalysisParams.SONAR_PROJECT_NAME,
  'sonar.projectVersion': sonarAnalysisParams.SONAR_PROJECT_VERSION,
  'sonar.sourceEncoding': 'UTF-8',
  'sonar.sources': 'lib',
  'sonar.test.inclusions': 'lib/**/*.test.js',
  'sonar.testExecutionReportPaths': 'sonar-test-report.xml',
  'sonar.tests': 'lib'
}

if (process.env.TRAVIS_PULL_REQUEST) {
  Object.assign(options, {
    'sonar.pullrequest.base': 'master',
    'sonar.pullrequest.branch': sonarAnalysisParams.SONAR_BRANCH_NAME,
    'sonar.pullrequest.key': process.env.TRAVIS_PULL_REQUEST
  })
}

// Run the scanner
sonarqubeScanner(
  {
    serverUrl: SONAR_HOST_URL,
    token,
    options
  },
  callback
)
