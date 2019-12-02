import ow from 'ow'

const validateCommonMetric = (quantity, comparateQuantity, label) => {
  ow(comparateQuantity.metric, label, ow.object.deepEqual(quantity.metric))
}

export default validateCommonMetric
