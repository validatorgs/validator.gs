// https://github.com/validatorjs/validator.js/blob/master/src/lib/isBoolean.js

const defaultOptions = { loose: false };
const strictBooleans = ["true", "false", "1", "0"];
const looseBooleans = [...strictBooleans, "yes", "no"];

/**
 * Check if the input string is a boolean.
 *
 * @param {string} str the string input.
 * @param {Object} options options is an object which defaults to { loose: false }. If loose is is set to false, the validator will strictly match ['true', 'false', '0', '1']. If loose is set to true, the validator will also match 'yes', 'no', and will match a valid boolean string of any case. (eg: ['true', 'True', 'TRUE']).
 * @return {boolean} the result of the string input indicating whether or not it's a boolean value.
 */
function isBoolean(str, options = defaultOptions) {
  assertString_(str);

  if (options.loose) {
    return looseBooleans.includes_(str.toLowerCase());
  }

  return strictBooleans.includes_(str);
}
