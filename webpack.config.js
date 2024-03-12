const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  mode:'development',
  entry: './assets/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'http'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'http'),
    compress: true,
    port: 9000,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"

        ],
      },
      {
        //test: /\.(png|jpe?g|gif|svg|ttf|woff|otf)$/,
        test: /\.(gif|svg|ttf|woff|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
              esModule: false // <- here
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }

      // {
      //   test: require.resolve('jquery'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'jQuery'
      //   },{
      //     loader: 'expose-loader',
      //     options: '$'
      //   }]
      // }

    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {template: path.resolve(__dirname, './assets/index.html')}
    ),
    new CopyWebpackPlugin({
      patterns:[
      {from:'./assets/img',to:'img'},
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // })
  ],
};
