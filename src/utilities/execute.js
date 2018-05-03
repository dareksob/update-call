const { exec } = require('child_process');

module.exports = function execute(cmd, args = []) {
  return new Promise((resolve, reject) => {
    // create command line
    const command = [cmd].concat(args).join(' ');

    exec(command, (error, stdout, stderr) => {
        error ? reject(stderr) : resolve(stdout);
    });
  });
};