/* eslint-disable max-lines */

import SiSpecialDerivedUnit from './si-special-derived-unit'
import SiSystemOfUnits from './si-system-of-units'
import siBaseUnitInstanceMap from './si-base-unit-instance-map'

const systemOfUnits = SiSystemOfUnits.getInstance()

const siDerivedUnits = {
  acceleration: new SiSpecialDerivedUnit({
    definition: 'meter per second squared',
    name: 'acceleration',
    symbol: 'ms⁻²',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  area: new SiSpecialDerivedUnit({
    definition: 'square meter',
    name: 'area',
    symbol: 'm²',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  becquerel: new SiSpecialDerivedUnit({
    definition: 'activity (of a radionuclide), radioactivity (decays per unit time) (s⁻¹)',
    name: 'becquerel',
    symbol: 'Bq',
    systemOfUnits,
    terms: [{
      power: -1,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  celsius: new SiSpecialDerivedUnit({
    definition: 'temperature relative to 273.15 K (K)',
    name: 'degree celsius',
    symbol: '°C',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('kelvin')
    }]
  }),
  concentration: new SiSpecialDerivedUnit({
    definition: 'mole per cubic meter',
    name: 'amount-of-substance concentration',
    symbol: 'mol/m³',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('mole')
    }, {
      power: -3,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  coulomb: new SiSpecialDerivedUnit({
    definition: 'electric charge, quantity of electricity (s·A)',
    name: 'coulomb',
    symbol: 'C',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  currentDensity: new SiSpecialDerivedUnit({
    definition: 'ampere per square meter',
    name: 'current density',
    symbol: 'A/m²',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('ampere')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  farad: new SiSpecialDerivedUnit({
    definition: 'electrical capacitance (C/V); (m⁻²·kg⁻¹·s⁴·A²)',
    name: 'farad',
    symbol: 'F',
    systemOfUnits,
    terms: [{
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: 4,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: 2,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  gray: new SiSpecialDerivedUnit({
    definition: 'absorbed dose (of ionizing radiation), specific energy (imparted), kerma (J/kg); (m²·s⁻²)',
    name: 'gray',
    symbol: 'Gy',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  henry: new SiSpecialDerivedUnit({
    definition: 'electrical inductance (Wb/A); (m²·kg·s⁻²·A⁻²)',
    name: 'henry',
    symbol: 'H',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  hertz: new SiSpecialDerivedUnit({
    definition: 'frequency (s⁻¹)',
    name: 'hertz',
    symbol: 'Hz',
    systemOfUnits,
    terms: [{
      power: -1,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  joule: new SiSpecialDerivedUnit({
    definition: 'energy, work, quantity of heat (N·m); (m²·kg·s⁻²)',
    name: 'joule',
    symbol: 'J',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  katal: new SiSpecialDerivedUnit({
    definition: 'catalytic activity (s⁻¹·mol)',
    name: 'katal',
    symbol: 'kat',
    systemOfUnits,
    terms: [{
      power: -1,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('mole')
    }]
  }),
  lumen: new SiSpecialDerivedUnit({
    definition: 'luminous flux (cd·sr); (m²·m⁻²·cd = cd)',
    name: 'lumen',
    symbol: 'lm',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('candela')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('candela')
    }]
  }),
  luminance: new SiSpecialDerivedUnit({
    definition: 'candela per square meter',
    name: 'luminance',
    symbol: 'cd/m²',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('candela')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  lux: new SiSpecialDerivedUnit({
    definition: 'illuminance (lm/m²); (m²·m⁻⁴·cd = m⁻²·cd)',
    name: 'lux',
    symbol: 'lx',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -4,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('candela')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('candela')
    }]
  }),
  magneticFieldStrength: new SiSpecialDerivedUnit({
    definition: 'ampere per meter',
    name: 'magnetic field strength',
    symbol: 'A/m',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('ampere')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  massDensity: new SiSpecialDerivedUnit({
    definition: 'kilogram per cubic meter',
    name: 'mass density',
    symbol: 'kg/m³',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -3,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  massFraction: new SiSpecialDerivedUnit({
    definition: 'kilogram per kilogram which may be represented by the number 1',
    name: 'mass fraction',
    symbol: 'kg/kg = 1',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }]
  }),
  newton: new SiSpecialDerivedUnit({
    definition: 'force (m·kg·s⁻²)',
    name: 'newton',
    symbol: 'N',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  ohm: new SiSpecialDerivedUnit({
    definition: 'electric resistance, impedance, reactance (V/A); (m²·kg·s⁻³·A⁻²)',
    name: 'ohm',
    symbol: 'Ω',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -3,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  pascal: new SiSpecialDerivedUnit({
    definition: 'pressure, stress (N/m); (m⁻¹·kg·s⁻²)',
    name: 'pascal',
    symbol: 'Pa',
    systemOfUnits,
    terms: [{
      power: -1,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  radian: new SiSpecialDerivedUnit({
    definition: 'plane angle (m·m⁻¹ = 1)',
    name: 'radian',
    symbol: 'rad',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  siemens: new SiSpecialDerivedUnit({
    definition: 'electric conductance (A/V); (m⁻²·kg⁻¹·s³·A²)',
    name: 'siemens',
    symbol: 'S',
    systemOfUnits,
    terms: [{
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: 3,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: 2,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  sievert: new SiSpecialDerivedUnit({
    definition: 'dose equivalent (of ionizing radiation) (J/kg); (m²·s⁻²)',
    name: 'sievert',
    symbol: 'Sv',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  specificVolume: new SiSpecialDerivedUnit({
    definition: 'cubic meter per kilogram',
    name: 'specific volume',
    symbol: 'm³/kg',
    systemOfUnits,
    terms: [{
      power: 3,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }]
  }),
  steradian: new SiSpecialDerivedUnit({
    definition: 'solid angle (m²·m⁻² = 1)',
    name: 'steradian',
    symbol: 'sr',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  tesla: new SiSpecialDerivedUnit({
    definition: 'magnetic flux density (Wb/m²); (kg·s⁻²·A⁻¹)',
    name: 'tesla',
    symbol: 'T',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  velocity: new SiSpecialDerivedUnit({
    definition: 'meter per second',
    name: 'speed, velocity',
    symbol: 'ms⁻¹',
    systemOfUnits,
    terms: [{
      power: 1,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  volt: new SiSpecialDerivedUnit({
    definition: 'voltage, electric potential difference, electromotive force (W/A); (m²·kg·s⁻³·A⁻¹)',
    name: 'volt',
    symbol: 'V',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -3,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  }),
  volume: new SiSpecialDerivedUnit({
    definition: 'cubic meter',
    name: 'volume',
    symbol: 'm³',
    systemOfUnits,
    terms: [{
      power: 3,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  watt: new SiSpecialDerivedUnit({
    definition: 'power, radiant flux (J/s); (m²·kg·s⁻³)',
    name: 'watt',
    symbol: 'W',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -3,
      unit: siBaseUnitInstanceMap.get('second')
    }]
  }),
  waveNumber: new SiSpecialDerivedUnit({
    definition: 'reciprocal meter',
    name: 'wave number',
    symbol: 'm⁻¹',
    systemOfUnits,
    terms: [{
      power: -1,
      unit: siBaseUnitInstanceMap.get('meter')
    }]
  }),
  weber: new SiSpecialDerivedUnit({
    definition: 'magnetic flux (V·s); (m²·kg·s⁻²·A⁻¹)',
    name: 'weber',
    symbol: 'Wb',
    systemOfUnits,
    terms: [{
      power: 2,
      unit: siBaseUnitInstanceMap.get('meter')
    }, {
      power: 1,
      unit: siBaseUnitInstanceMap.get('kilogram')
    }, {
      power: -2,
      unit: siBaseUnitInstanceMap.get('second')
    }, {
      power: -1,
      unit: siBaseUnitInstanceMap.get('ampere')
    }]
  })
}

export default siDerivedUnits

/* eslint-enable max-lines */
