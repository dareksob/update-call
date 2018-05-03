#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const cwd = process.cwd();
const [command, file, pattern, ...cmd] = process.argv;
const util = require('./utilities');

// check
util.required(pattern, 'Pattern is required');
util.required(cmd, 'Call command is required');

// preset
const regPattern = new RegExp(pattern);
const callDelay = util.delay(200, () => {
  util.execute(cmd.join(cmd))
    .then(console.log)
    .catch(console.warn);
});

console.log(`Watch in folder ${cwd}`);
fs.watch(cwd, {
  recursive: true
}, (eventType, filename) => {
  if (pattern.test(filename)) {
    console.log('Change detected', filename);
    callDelay(filename);
  }
});