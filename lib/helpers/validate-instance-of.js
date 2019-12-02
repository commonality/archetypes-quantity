import ow from 'ow'

const validateInstanceOf = (value, constructor) => {
  ow(value, ow.object.instanceOf(constructor))
}

export default validateInstanceOf
