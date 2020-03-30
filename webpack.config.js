const WebpackConfig = require('@codeinc.mx/webpack-config');

module.exports = (env) => new WebpackConfig({ dirname: __dirname, env } ).getConfig();