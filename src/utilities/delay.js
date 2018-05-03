module.exports = function delay(time, callback) {
  let timer;
  let params = [];

  return function(...args) {
    if (timer) {
      removeTimeout(timer);
    }

    params.push(args);

    timer = setTimeout(() => {
      callback(params);
      params.length = 0;
    }, time);
  }
};