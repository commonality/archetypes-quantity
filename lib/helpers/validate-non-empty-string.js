import ow from 'ow'

const validateNonEmptyString = (value, label) => {
  ow(
    value,
    label,
    ow.string.validate((val) => ({
      message: `Expected ${label} to be a non-empty \`string\``,
      validator: ow.isValid(val, ow.string.nonEmpty)
    }))
  )
}

export default validateNonEmptyString
