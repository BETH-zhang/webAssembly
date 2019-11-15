const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config')
const package = require('./package')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'index.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
    library: package.name,
    libraryTarget: 'umd'
  },
  // optimization: {
  //   // splitChunks: {
  //   //   chunks: 'all'
  //   // }
  //   minimizer: [new UglifyJsPlugin({
  //     sourceMap: true,
  //   })],
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1
              }
            },
            // {
            //   loader: require.resolve('postcss-loader'),
            //   options: {
            //     // Necessary for external CSS imports to work
            //     // https://github.com/facebookincubator/create-react-app/issues/2677
            //     ident: 'postcss',
            //     plugins: () => [
            //       require('postcss-flexbugs-fixes'),
            //       autoprefixer({
            //         browsers: [
            //           '>1%',
            //           'last 4 versions',
            //           'Firefox ESR',
            //           'not ie < 9' // React doesn't support IE8 anyway
            //         ],
            //         flexbox: 'no-2009'
            //       })
            //     ]
            //   }
            // },
            {
              loader: require.resolve('less-loader'),
              options: {
                javascriptEnabled: true
              },
            }, 
          ]
        }),
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        options: {
          fallback: 'responsive-loader',
          quality: 85,
          // limit: 8192,
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader', 
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: 'index.css'
    })
  ],
  devtool: 'source-map',

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, './src')],
    extensions: ['.js', '.jsx']
  },

  externals: _externals()
}

function _externals() {
  const exs = {}
  config.externals.forEach(ex => {
    exs[ex] = {
      commonjs: ex,
      commonjs2: ex,
      amd: ex
    }
  })

  return exs
}
