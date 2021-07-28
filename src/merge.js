// https://github.com/validatorjs/validator.js/blob/master/src/lib/util/merge.js

function merge_(obj = {}, defaults) {
  for (const key in defaults) {
    if (typeof obj[key] === "undefined") {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
