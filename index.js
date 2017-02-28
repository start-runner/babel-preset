module.exports = {
  plugins: [].concat(
    require('babel-preset-env').default(null, {
      targets: {
        node: 4
      }
    }).plugins,
    require('babel-plugin-transform-object-rest-spread')
  )
};
