/**
 * @description 控制一段时间只执行一次
 * @param {function} func
 * @param {number}   long
 */

export const once = (func, long = 500) => {
  let isLock = false;
  let handler = null;
  let unlock = () => {
    handler && clearTimeout(handler);
    // 花500ms解锁
    handler = setTimeout(function () {
      isLock = false;
      handler = null;
    }, long);
  };

  return (...args) => {
    if (isLock) {
      return;
    }
    isLock = true;
    unlock();
    return func.apply(this, args);
  };
};

/**
 * @description 控制异步函数在其执行时间内只能触发一次
 * @param {function} asyncFn -- 异步函数
 */
export const lockHandler = function (asyncFn) {
  let lock = false;
  const unlock = async (...args) => {
    await asyncFn(...args);
    lock = false;
  };
  return async (...args) => {
    if (lock) return;
    lock = true;
    unlock(...args);
  };
};


