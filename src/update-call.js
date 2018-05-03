#!/usr/bin/env node

const fs = require('fs');
const cwd = process.cwd();
const [command, file, pattern, cmd, ...args] = process.argv;
const util = require('./utilities');
const executionDelay = 1000;
const verbose = false;

// check
util.required(pattern, 'Pattern is required');
util.required(cmd, 'Call command is required');

// special pattern * execute on all files changes
const rePattern = pattern === '*' ?
  { test: () => true } :
  new RegExp(pattern);

// execute function on file changes
const callDelay = util.delay(executionDelay, files => {
  // combine all files to set as argument %0
  const fileArg = files.join(' ');

  // replace argument placeholders
  const cmdArgs = args.map(arg => {
    return arg.replace('%0', fileArg);
  });

  util.execute(cmd, cmdArgs)
    .then(console.log)
    .catch(console.warn);
});

console.log(`Watch in folder ${cwd}`);
fs.watch(cwd, {
  recursive: true
}, (eventType, filename) => {
  if (rePattern.test(filename)) {
    console.log('Change detected', filename);
    callDelay(filename);
  }
});