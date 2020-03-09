// tslint:disable-next-line: no-var-requires
const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'lwc',
  frameworkPresets: [require.resolve('./lwc-preset-framework.js')],
};
