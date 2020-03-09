// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';
const path = require('path');
const LWCWebpackPlugin = require('lwc-webpack-plugin')

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.stories\.js$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        }
        // {
        //   test: /\.html$/,
        //   use: [
        //     {
        //       loader: require.resolve('html-loader'),
        //     },
        //   ],
        // },
      ],
    },
    plugins: [
      new LWCWebpackPlugin({
          namespace: {
              // LWC Namespace with path
              c: path.resolve('./c'),
          },
          modules: [
              "@salesforce-ux/design-system"
          ]
      })
    ], 
  };
}
