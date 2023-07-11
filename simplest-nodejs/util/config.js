const overrides = require(`${process.cwd()}/config/${process.env.ENV || 'local'}`);
const baseConfig = require(`${process.cwd()}/config/base`);
const debug = require('debug')('services-lib:config');
const util = require('util');

const dumpConfig = false;

const environment = process.env.ENV || 'local';
debug(`Overrides based on environment ${environment}`);
if (dumpConfig) {
  debug(`${util.inspect(overrides)}`);
}

if (environment && Object.keys(overrides).length > 0) {
  debug(`Merging configuration for base and ${environment}`);
  Object.assign(baseConfig, overrides);
}

if (dumpConfig) {
  debug(`Application config for environment ${environment}:`);
  debug(`${util.inspect(baseConfig)}`);
}

module.exports = baseConfig;
