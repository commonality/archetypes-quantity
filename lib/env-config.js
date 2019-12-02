const dotenvExtended = require('dotenv-extended')
const debug = require('debug')('archetypes:quantity:env-config')

/**
 * @description
 * Load environment variables. This should be the first
 * import/require of the application, as well as any modules
 * that depend on ENV variables.
 *
 * @typedef {object} envConfig
 * @public
 * @see https://git.io/fhV1h
 */

const dotenvExtendedDefaults = {
  assignToProcessEnv: true,
  defaults: '.env.defaults',
  errorOnMissing: true,
  includeProcessEnv: true,
  overrideProcessEnv: false,
  path: '.env',
  schema: '.env.schema'
}

const initEnvDefaults = (options = dotenvExtendedDefaults) =>
  dotenvExtended.load(options)

const sortEnvVars = (envDefaults) => {
  const dotenvVars = {
  }
  const keyValuePairs = Object.entries(envDefaults).sort()
  const envVarMap = new Map(keyValuePairs)
  envVarMap.forEach((value, key) => {
    Object.defineProperty(dotenvVars, key, {
      enumerable: true,
      value,
      writable: true
    })
  })
  return dotenvVars
}

const createEnvConfig = () => {
  return sortEnvVars(initEnvDefaults())
}

const envConfig = createEnvConfig()

debug(envConfig)
debug(dotenvExtended)

module.exports = envConfig
