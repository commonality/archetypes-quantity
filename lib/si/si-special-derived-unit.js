import DerivedUnit from '../derived-unit/derived-unit'
import SiSystemOfUnits from './si-system-of-units'

class SiSpecialDerivedUnit extends DerivedUnit {
  constructor (params) {
    super({
      definition: params.definition,
      name: params.name,
      symbol: params.symbol,
      systemOfUnits: SiSystemOfUnits.getInstance(),
      terms: params.terms
    })
    Object.freeze(Object.seal(this))
  }
}

export default SiSpecialDerivedUnit
