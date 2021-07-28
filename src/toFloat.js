// https://github.com/validatorjs/validator.js/blob/master/src/lib/toFloat.js

function toFloat_(str) {
  if (!isFloat(str)) return NaN;

  return parseFloat(str);
}
