const defineGetterProperty = (ref, name, value) =>
  Object.defineProperty(ref, name, {
    configurable: false,
    enumerable: false,
    value,
    writable: false
  })

export default defineGetterProperty
