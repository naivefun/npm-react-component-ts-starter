import * as webpack from 'webpack';

import config from './base';
import env from './env';

const baseEntry = config.entry as webpack.Entry;
const entry = {
  ...baseEntry
};

const module = {
  ...config.module
};

const plugins = [
  ...(config.plugins || []),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': 'null',
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

const hotConfig = {
  ...config,
  entry,
  module,
  plugins,
  devtool: '#cheap-module-source-map',
  devServer: {
    contentBase: env.contentBase,
    historyApiFallback: true,
    hot: true,
    stats: 'minimal',
    port: env.port,
    open: true,
  },
};

export default hotConfig;
