import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as path from 'path';

// const VENDOR_LIBS = Object.keys(require('../package.json').dependencies);

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '..', 'demo/index.tsx'),
    // vender: VENDOR_LIBS
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'docs')
  },
  devtool: '#source-map',
  resolve: {
    extensions: [
      '.webpack.js',
      '.json',
      '.ts',
      '.js',
      '.tsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
                declaration: false,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index-template.html'),
      chunksSortMode: 'dependency',
    }),
  ],
};

export default config;
