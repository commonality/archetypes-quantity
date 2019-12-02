import archetypesQuantity from '../archetypes-quantity.js'

describe('archetypesQuantity', () => {
  it('provides seven (7) modules', () => {
    const {
      DerivedUnit,
      DerivedUnitTerm,
      Metric,
      Quantity,
      RoundingPolicy,
      StandardConversion,
      SystemOfUnits,
      Unit,
      UnitConverter,
      roundingStrategy,
      si
    } = archetypesQuantity

    expect(DerivedUnit).toBeDefined()
    expect(DerivedUnitTerm).toBeDefined()
    expect(Metric).toBeDefined()
    expect(Quantity).toBeDefined()
    expect(RoundingPolicy).toBeDefined()
    expect(StandardConversion).toBeDefined()
    expect(SystemOfUnits).toBeDefined()
    expect(Unit).toBeDefined()
    expect(UnitConverter).toBeDefined()
    expect(roundingStrategy).toBeDefined()
    expect(si).toBeDefined()
  })
})
