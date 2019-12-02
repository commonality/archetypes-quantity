import ow, { array as _array, any } from 'ow'
import get from 'lodash.get'

const validateArrayOfType = (array, type, opts = {
  allowEmpty: true
}) => {
  let allowEmptyPredicate = _array.not.empty
  if (opts.allowEmpty) {
    allowEmptyPredicate = _array.empty
  }
  ow(array, any(get(ow, type), allowEmptyPredicate))
}

export default validateArrayOfType
