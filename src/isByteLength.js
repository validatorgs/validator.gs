// https://github.com/validatorjs/validator.js/blob/master/src/lib/isByteLength.js

function isByteLength_(str, options) {
  assertString_(str);
  let min;
  let max;
  if (typeof options === "object") {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength_(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === "undefined" || len <= max);
}
