/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-unpublished-require */
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { dependencies as _dependencies, devDependencies as _devDependencies, module as _module, main } from './package.json'
import recursiveReaddir from 'recursive-readdir'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
require('./lib/env-config').default

const dependencies = Object.keys(_dependencies)

const devDependencies = Object.keys(_devDependencies).map(
  (dev) => `node_modules/${dev}/**`
)

const includeFilesThatAreNotTests = (async () => {
  let files = null
  try {
    files = await recursiveReaddir('./lib').filter(
      (filePath) => !filePath.includes('__tests__')
    )
  } catch (err) {
    files = []
  }
  return files
})()

const rollupConfig = {
  external: dependencies,
  input: 'lib/archetypes-quantity.js',
  output: [
    {
      compact: true,
      file: main,
      format: 'cjs',
      interop: false
    },
    {
      compact: true,
      file: _module,
      format: 'esm',
      interop: false
    }
  ],
  plugins: [
    commonjs({
      exclude: devDependencies
    }),
    json({
      compact: true,
      exclude: devDependencies,
      indent: '  ',
      preferConst: true
    }),
    resolve({
      mainFields: ['module', 'main'],
      only: includeFilesThatAreNotTests
    }),
    terser()
  ]
}

export default rollupConfig
