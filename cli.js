#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var execshell = require('exec-sh');
var sync = require('./app.js');

if(argv._.length === 0) {
  console.error('Usage: kindle-sync [directory]');
  process.exit();
}
