// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';

const JS_LOADER = {
  test: /\.js$/,
  exclude: /(node_modules|modules|lwc)/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      plugins: [require.resolve('@babel/plugin-proposal-object-rest-spread')],
      babelrc: false,
    },
  },
};

const TS_LOADER = {
  test: /\.ts$/,
  exclude: /(node_modules|modules|lwc)/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      plugins: [
        require.resolve('@babel/plugin-syntax-class-properties'),
        [
          require.resolve('@babel/plugin-syntax-decorators'),
          {
            decoratorsBeforeExport: true,
          },
        ],
      ],
      presets: [require.resolve('@babel/preset-typescript')],
    },
  },
};

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.html$/,
          use: [
            {
              loader: require.resolve('html-loader'),
            },
          ],
        },
        JS_LOADER,
        TS_LOADER,
      ],
    },
  };
}
