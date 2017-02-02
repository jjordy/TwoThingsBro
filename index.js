#!/usr/bin/env node
const args = require('yargs').argv
const lib = require('./lib')
const debug = require('debug')('TwoThingsBro:cli')

if (args.t || args.task) {
  args.t ? lib.execArgs(args, 't').catch(err => debug(err)) : null
  args.task ? lib.execArgs(args, 'task').catch(err => debug(err)) : null
}
