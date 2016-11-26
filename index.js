module.exports = {
  plugins: [].concat(
    require('babel-preset-es2015-node4').plugins,
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-add-module-exports')
  )
};
