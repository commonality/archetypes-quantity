import StandardConversion from '../../standard-conversion/standard-conversion'
import ow from 'ow'

const validateConstructorParam = (value) =>
  ow(
    value,
    ow.any(
      ow.array.empty,
      ow.array.ofType(ow.object.instanceOf(StandardConversion))
    )
  )

export default validateConstructorParam
