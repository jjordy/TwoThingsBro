#!/usr/bin/env node
const args = require('yargs').argv
const lib = require('./lib')

if (args.t || args.task) {
  args.t ? lib.execArgs(args, 't').catch(err => console.log(err)) : null
  args.task ? lib.execArgs(args, 'task').catch(err => console.log(err)) : null
}
