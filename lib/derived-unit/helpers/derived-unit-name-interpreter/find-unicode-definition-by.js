import config from '../../../config'
import get from 'lodash.get'

const { exponent } = config.get('quantity')

const unicodeDefinitionFinderDefaults = {
  key: 'char',
  scriptRange: 'superscripts'
}

const findUnicodeDefinitionBy = (value, opts = {
  ...unicodeDefinitionFinderDefaults
}) => {
  const { key, scriptRange } = {
    ...unicodeDefinitionFinderDefaults,
    ...opts
  }
  return get(exponent, scriptRange)
    .find((definition) => get(definition, key) === value)
}

export default findUnicodeDefinitionBy
