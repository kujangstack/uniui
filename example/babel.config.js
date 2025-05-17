const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      ['react-native-unistyles/plugin'],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
          ],
          alias: {
            '@kujang/uniui': path.resolve(__dirname, '../src'),
            '@': path.resolve(__dirname, '../src'),
          },
        },
      ],
    ],
  }
}
