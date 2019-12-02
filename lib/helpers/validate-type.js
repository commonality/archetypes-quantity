import get from 'lodash.get'
import ow from 'ow'

const validateType = (value, type) => {
  ow(value, get(ow, type.toLowerCase()))
}

export default validateType
