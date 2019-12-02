const defineFrozenProperty = (ref, name, value) => {
  return Object.defineProperty(ref, name, {
    configurable: false,
    enumerable: true,
    value,
    writable: false
  })
}

export default defineFrozenProperty
