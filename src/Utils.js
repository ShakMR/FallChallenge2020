global.debug = (...arg) => {
  console.error(...arg);
};

Array.prototype.substract = function (otherArray) {
  return this.map((item, index) => item - otherArray[index]);
}

export default {
  debug,
};
