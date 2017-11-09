/*
 * This configuration is based on the npm module @silverstripe/webpack-config:
 * https://www.npmjs.com/org/silverstripe
 */
const path = require('path');
const webpack = require('webpack');

// Import the SilverStripe core config
const webpackConfig = require('@silverstripe/webpack-config');
const {
  resolveJS,
  externalJS,
  moduleJS,
  pluginJS,
  moduleCSS,
  pluginCSS,
} = webpackConfig;

const ENV = process.env.NODE_ENV;

const PATHS = {
    MODULE: {
        ROOT: path.resolve(),
        MODULES: 'node_modules',
        SRC: path.resolve('client/src'),
        DIST: path.resolve('client/dist'),
        BUNDLES: path.resolve('client/src/bundles'),
        STYLES: path.resolve('client/src/styles'),
    },
    ADMIN: {
        ROOT: path.resolve(),
        MODULES: 'node_modules',
        SRC: path.resolve('admin/client/src'),
        DIST: path.resolve('admin/client/dist'),
        BUNDLES: path.resolve('admin/client/src/bundles'),
        STYLES: path.resolve('admin/client/src/styles'),
    }
};

const config = [
  {
    entry: {
      bundle: PATHS.ADMIN.BUNDLES + '/bundle.js'
    },
    output: {
        path: PATHS.ADMIN.DIST,
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devtool: (ENV !== 'production') ? 'source-map' : '',
    resolve: resolveJS(ENV, PATHS.ADMIN),
    externals: externalJS(ENV, PATHS.ADMIN),
    module: moduleJS(ENV, PATHS.ADMIN),
    plugins: pluginJS(ENV, PATHS.ADMIN),
  },
  {
    entry: {
      bundle: PATHS.ADMIN.STYLES + '/bundle.scss'
    },
    output: {
      path: PATHS.ADMIN.DIST,
      filename: 'css.js',
      sourceMapFilename: 'bundle.css.map'
    },
    devtool: (ENV !== 'production') ? 'source-map' : '',
    module: moduleCSS(ENV, PATHS.ADMIN),
    plugins: pluginCSS(ENV, PATHS.ADMIN),
  },  
];

module.exports = (env = {development: true}) => {
  process.env.NODE_ENV = (env.production ? 'production' : 'development');
  console.log(`Running in ${process.env.NODE_ENV} mode...`);
  return config(process.env.NODE_ENV);
};

module.exports = config;
