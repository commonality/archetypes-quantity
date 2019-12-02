import quantity from '../archetypes-quantity'

describe('@archetypes/quantity', () => {
  describe('module captures amounts measured according to a metric', () => {
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
    } = quantity

    describe('@archetypes/quantity/DerivedUnit', () => {
      it('represents a combination of one or more base `Units` according to a specific equation', () => {
        expect(DerivedUnit).toBeDefined()
      })
    })

    describe('@archetypes/quantity/DerivedUnitTerm', () => {
      it('represents part of a `DerivedUnit` comprising a single `Unit` and its `power`', () => {
        expect(DerivedUnitTerm).toBeDefined()
      })
    })

    describe('@archetypes/quantity/Metric', () => {
      it('is a standard of measurement', () => {
        expect(Metric).toBeDefined()
      })
    })

    describe('@archetypes/quantity/Quantity', () => {
      it('is an amount of something measured according to some standard of measurement', () => {
        expect(Quantity).toBeDefined()
      })
    })

    describe('@archetypes/quantity/RoundingPolicy', () => {
      it(`determines the mathematical semantics of the \`Quantity\` archetype's \`round(...)\` operation`, () => {
        expect(RoundingPolicy).toBeDefined()
      })
    })

    describe('@archetypes/quantity/StandardConversion', () => {
      it('defines a `conversionFactor` that can be used to convert a `Quantity` in a source `Unit` to a `Quantity` in a target `Unit`', () => {
        expect(StandardConversion).toBeDefined()
      })
    })

    describe('@archetypes/quantity/SystemOfUnits', () => {
      it('represents a set of related `Units` defined by a standard such as **SI**', () => {
        expect(SystemOfUnits).toBeDefined()
      })
    })

    describe('@archetypes/quantity/Unit', () => {
      it('represents a type of `Metric` that is part of a `SystemOfUnits`', () => {
        expect(Unit).toBeDefined()
      })
    })

    describe('@archetypes/quantity/UnitConverter', () => {
      it('is responsible for converting a `Quantity` in a source `Unit` to a `Quantity` in a target `Unit`', () => {
        expect(UnitConverter).toBeDefined()
      })
    })

    describe('@archetypes/quantity/roundingStrategy', () => {
      it('represents an aspect of a `RoundingPolicy` that determines the type of rounding to be applied', () => {
        expect(roundingStrategy).toBeDefined()
      })
    })

    describe('@archetypes/quantity/si', () => {
      it('is a module that provides all of the base units defined in the **International System of Units** (**SI**)', () => {
        expect(si).toBeDefined()
      })
    })
  })
})
