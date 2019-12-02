import defineFrozenProperty from '../helpers/define-frozen-property'

class SystemOfUnits {
  constructor (nameOfSystem, nameOfStandardizationBody) {
    defineFrozenProperty(
      this,
      'nameOfStandardizationBody',
      nameOfStandardizationBody
    )
    defineFrozenProperty(this, 'nameOfSystem', nameOfSystem)
  }
}

export default SystemOfUnits
