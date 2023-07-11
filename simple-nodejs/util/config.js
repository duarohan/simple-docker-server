/**
 * Copyright (c) 2017 Square Panda Inc.
 * All Rights Reserved.
 * Dissemination, use, or reproduction of this material is strictly forbidden
 * unless prior written permission is obtained from Square Panda Inc.
 * @Last modified by:   arjun
 *
 * Provides a structure to access microservice configuration properties.  Assumes the microservice
 * using this utility has defined configuration under <microservice>/config, with a base.json file
 * that defines a common config, and environment specific json files that set overrides for those
 * environments.  Which environment to use overrides for is defined by the ENV environment
 * variable, expected to be set by the invoker of the microservice.
 */
// Load config json from base, as well as environment specific config overrides.
const overrides = require(`${process.cwd()}/config/${process.env.ENV || 'local'}`);
const baseConfig = require(`${process.cwd()}/config/base`);
// The logger module requires this config module for parameters such as log level.
// To avoid dealing with cyclic module dependencies, the debug utility is used instead.
const debug = require('debug')('services-lib:config');
// Use util and commented out debug statements to dump config structure if debugging
// is needed.  Commented out by default to avoid leaking passwords in log files.
const util = require('util');

// Flag to control if config structure is dumped using debug utility.  Enable if
// debugging is needed.  Commented out be default to avoid leaking passwords in
// log files.
const dumpConfig = false;

const environment = process.env.ENV || 'local';
debug(`Overrides based on environment ${environment}`);
if (dumpConfig) {
  debug(`${util.inspect(overrides)}`);
}

if (environment && Object.keys(overrides).length > 0) {
  // Merge overrides into baseConfig (this modifies contents of baseConfig structure).
  debug(`Merging configuration for base and ${environment}`);
  Object.assign(baseConfig, overrides);
}

if (dumpConfig) {
  debug(`Application config for environment ${environment}:`);
  debug(`${util.inspect(baseConfig)}`);
}

module.exports = baseConfig;
