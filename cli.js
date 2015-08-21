#!/usr/bin/env node

var argv = process.argv.slice(2);
// var execshell = require('exec-sh');
var sync = require('./app.js');

if(argv.length === 0) {
  console.error('Usage: kindle-sync [directory]');
  process.exit();
}
process.exit();
