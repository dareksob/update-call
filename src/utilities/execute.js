module.exports = function execute() {
  return new Promise((resolve, reject) => {
    exec([cmd].concat(args).join(' '), (error, stdout, stderr) => {
        error ? reject(error) : resolve(stdout);
    });
  });
};