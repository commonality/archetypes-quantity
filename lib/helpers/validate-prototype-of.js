import ow from 'ow'

/* eslint-disable max-len */
const buildMsgFrom = (label, constructorName, instance) => {
  const { name } = getPrototypeOf(instance)
  return `Expected \`${label}\` either to inherit or be an instance of \`${constructorName}\` instead of \`${name}\``
}
/* eslint-enable max-len */

const getPrototypeOf = (value) => {
  if (ow.isValid(value, ow.function)) {
    return value.prototype
  }
  return Object.getPrototypeOf(value)
}

const prototypesAreSameFor = (constructor, instance) =>
  constructor.prototype === getPrototypeOf(instance)

const isInstanceOf = (constructor, instance) =>
  ow.isValid(instance, ow.object.instanceOf(constructor))

const isPrototypeOf = (constructor, instance) =>
  Object.prototype.isPrototypeOf.call(
    constructor.prototype,
    getPrototypeOf(instance)
  ) ||
  isInstanceOf(constructor, instance) ||
  prototypesAreSameFor(constructor, instance)

const anyValid = (constructor, instance) =>
  isPrototypeOf(constructor, instance) ||
  isInstanceOf(constructor, instance) ||
  prototypesAreSameFor(constructor, instance)

/**
 * Check whether or not an object exists within another object's prototype
 * chain.
 *
 * @param {function} constructor - A function with a "private" `prototype`
 * property.
 * @param {object} instance - An Object with a defined `prototype` property,
 * which holds a link to another object's `prototype` property.
 * @param {string} label - The text to display whenever an ArgumentError
 * is thrown.
 */

const validatePrototypeOf = (instance, constructor, label) => {
  const { name } = constructor
  ow(
    instance,
    ow.object.validate((obj) => ({
      message: buildMsgFrom(label, name, instance),
      validator: anyValid(constructor, obj)
    }))
  )
}

validatePrototypeOf.isInstanceOf = isInstanceOf
validatePrototypeOf.isPrototypeOf = isPrototypeOf
validatePrototypeOf.prototypesAreSameFor = prototypesAreSameFor

export default validatePrototypeOf
