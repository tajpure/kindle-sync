#!/usr/bin/env node

var argv = process.argv.slice(2);
var sync = require('./app.js');
var length = argv.length;

if(length === 2) {
  var command = argv[0];
  var arg = argv[1];
  switch(command) {
    case '--config.user' : break;
    case '--config.pass' : break;
    case '--config.host' : break;
    case '--config.port' : break;
    case '--config.to' : break;
    case '' : break;
    default : printHelpInfo();
  }
}
else {
  printHelpInfo();
}

function printHelpInfo() {
  console.error('Usage: kindle-sync <command>\n\nCommands:\n  help     Get help\n ');
}
process.exit();
