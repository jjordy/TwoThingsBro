#!/usr/bin/env node
const args = require('yargs').argv
const lib = require('./lib')

if (args.t || args.task) {
  args.t ? lib.execArgs(args, 't').catch(err => console.log(err)) : null
  args.task ? lib.execArgs(args, 'task').catch(err => console.log(err)) : null
} else {
  console.log(`
    Commands \n
    -t --task: a task to run\n
    -c --command: the command used to run the task (defaults to npm run)\n
    \n
    Example \n
    two-things-bro -t=webpack-dev-server.js -t=server.js -c=node
    two-things-bro -t=webpack-dev-server -t=dev
  `)
}
