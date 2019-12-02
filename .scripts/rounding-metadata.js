class RoundingMetadata {
  /* eslint-disable max-statements,max-lines-per-function */

  constructor (number, roundingPolicy) {
    const {
      numberOfDigits,
      roundingDigit,
      roundingStep,
      roundingStrategy
    } = Object.fromEntries(
      Object.entries(roundingPolicy).map(([key, value]) => [
        key,
        toInteger(value)
      ])
    )

    defineFrozenProperty(this, 'number', Number(number))

    defineFrozenProperty(this, 'roundingPolicy', {
      numberOfDigits,
      roundingDigit,
      roundingStep,
      roundingStrategy
    })
    const characteristic = characteristicOf(number)
    defineFrozenProperty(this, 'characteristic', {
      length: characteristic.toString().length,
      value: characteristic
    })

    const decimalIndex = number.toString().indexOf('.')
    defineFrozenProperty(this, 'decimalIndex', decimalIndex)

    const digits = Array.from(number.toString()).map((num) => toInteger(num))
    defineFrozenProperty(this, 'digits', digits)

    const comparatorIndex = toInteger(
      numberOfDigits + decimalIndex + Math.sign(numberOfDigits) * ONE
    )
    defineFrozenProperty(this, 'comparator', {
      index: comparatorIndex,
      value: nth(digits, comparatorIndex) || ZERO
    })

    const mantissa = mantissaOf(number)
    defineFrozenProperty(this, 'mantissa', {
      length: mantissa.toString().length,
      value: mantissa
    })

    const roundingPlaceIndex = toInteger(numberOfDigits + decimalIndex)
    defineFrozenProperty(this, 'roundingPlace', {
      index: roundingPlaceIndex,
      value: nth(digits, roundingPlaceIndex) || ZERO
    })

    const truncatedDigitsValue = digits.slice(
      ZERO,
      nth(digits, comparatorIndex)
    )

    /*
     * Const lastElement = nth(
     *   truncatedDigitsValue,
     *   truncatedDigitsValue.length - ONE
     * )
     */

    /*
     * Const DECIMAL_SYMBOL = '.'
     * if (lastElement === DECIMAL_SYMBOL) {
     *   truncatedDigitsValue.pop()
     * }
     */

    defineFrozenProperty(this, 'truncatedDigits', {
      toNumber () {
        return Number(this.toString())
      },
      toString () {
        return truncatedDigitsValue.join('')
      },
      value: truncatedDigitsValue
    })
  }
  /* eslint-enable max-statements,max-lines-per-function */
}
