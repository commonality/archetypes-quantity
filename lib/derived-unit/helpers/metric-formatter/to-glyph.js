import findUnicodeDefinitionBy from '../derived-unit-name-interpreter/find-unicode-definition-by'
import get from 'lodash.get'

const toGlyph = (derivedUnitTerm, opts = {
  'key': 'char',
  'scriptRange': 'superscripts'
}) => {
  const { power } = derivedUnitTerm
  const tokens = power.toString().split('')
  return tokens.map((token) =>
    get(findUnicodeDefinitionBy(token, opts), 'glyph', '')
  ).join('')
}

export default toGlyph
