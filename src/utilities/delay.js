module.exports = function delay(time, callback) {
  let timer;
  let params = [];

  return function(...args) {
    // recallable
    if (timer) {
      timer = clearTimeout(timer);
    }

    // concat all arguments
    params.push(args.length > 1 ? args : args[0]);

    // call if timeout is called (delay callback)
    timer = setTimeout(() => {
      callback(params);
      params.length = 0;
    }, time);
  }
};