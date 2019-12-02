import findUnicodeDefinitionBy from '../find-unicode-definition-by';

describe('@archetypes/quantity/derived-unit/helpers/findUnicodeDefinitionBy', () => {
  it('finds a member of `exponentCollection` by key and value', () => {
    expect(findUnicodeDefinitionBy('2')).toEqual({
      "char": "2",
      "codePoint": "U+00B2",
      "glyph": "²",
      "localEngineCodePoint": 178,
      "name": "superscript-two"
    })
  })
})
