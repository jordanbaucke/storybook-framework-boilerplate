// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';
// webpackConfig generator 
const { generateWebpackConfig } = require('config/webpack/generateWebpackConfig')


export function webpack(config : Configuration) {
  let webpackConfigCustom: any

  // generate a lwc-webpackConfig as lwc-services does in the build command
  return generateWebpackConfig(
      'development',
      config
  )

  // return {
  //   ...config,
  //   module: {
  //     ...config.module,
  //     rules: [
  //       ...config.module.rules,
  //       {
  //         test: /\.html$/,
  //         use: [
  //           {
  //             loader: require.resolve('html-loader'),
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // };
}