import haveCommonSystemsOfUnits from './have-common-systems-of-units'
import ow from 'ow'

/**
 * Determine whether all Quantity objects share the same types of {Metric}.
 *
 * @param  {...Quantity} quantities
 * @throws {ArgumentError}
 * @returns {void}
 */

const validateCommonSystemOfUnits = (...quantities) => {
  quantities.reduce((previousQty, currentQty) => {
    ow(
      currentQty,
      ow.object.validate((qty) => ({
        message: `Cannot compare two different Systems of Units.`,
        validator: haveCommonSystemsOfUnits(qty, previousQty)
      }))
    )
    return currentQty
  })
}

export default validateCommonSystemOfUnits
