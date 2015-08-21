#!/usr/bin/env node

var scanf = require('scanf');
var argv = process.argv.slice(2);
var sync = require('./app.js');
var length = argv.length;

if(length === 1) {
  var command = argv[0];
  var arg = argv[1];
  switch(command) {
    case '--config' : {
      var config = {email: '', pass: '', host: '', port: ''};
      console.log('email:');
      config.email = scanf('%s');
      console.log('pass:');
      config.pass = scanf('%s');
      console.log('host:');
      config.host = scanf('%s');
      console.log('port:');
      config.port = scanf('%s');
      console.log(config);
    } break;
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
  console.log('Usage: kindle-sync <command>\n\nCommands:\n  help     Get help\n ');
}

// process.exit();
