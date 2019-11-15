module.exports = {
  module: {
      rules: [
          {
              test: /\.ts$/,
              loader: 'assemblyscript-typescript-loader',
              options: {
                  sourceMap: true,
              }
          }
      ]
  },
};