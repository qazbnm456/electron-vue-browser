'use strict'

// Set BABEL_ENV to use proper env config
process.env.BABEL_ENV = 'test';

// Attach Chai APIs to global scope
const { expect, should, assert } = require('chai');
global.expect = expect;
global.should = should;
global.assert = assert;

// Initilization
require('./init');
