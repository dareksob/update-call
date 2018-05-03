module.exports = function errorEnd(message) {
  console.error(message);
  process.exit(1);
}
