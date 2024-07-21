const fs = require('fs')
const path = require('path')
const escape = require('escape-string-regexp')
const exclusionList = require('metro-config/src/defaults/exclusionList')
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

const root = path.resolve(__dirname, '../')
const rootPak = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8')
)

const modules = [
  '@babel/runtime',
  ...Object.keys({
    ...rootPak.dependencies,
    ...rootPak.peerDependencies,
  }),
]

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  watchFolders: [root],
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
    blacklistRE: exclusionList([
      new RegExp(`^${escape(path.join(root, 'node_modules'))}\\/.*$`),
    ]),
    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name)
      return acc
    }, {}),
  },
}

module.exports = mergeConfig(defaultConfig, config)
