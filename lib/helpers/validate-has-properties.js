import ow from 'ow'

const validateHasProperties = (obj, keys) =>
  ow(obj, ow.object.hasKeys(...keys))

export default validateHasProperties
