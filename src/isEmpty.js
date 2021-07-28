// https://github.com/validatorjs/validator.js/blob/master/src/lib/isEmpty.js

const default_is_empty_options = {
  ignore_whitespace: false,
};

/**
 * Check if the input string has a length of zero.
 *
 * @param {string} str the string input.
 * @param {Object} options options is an object which defaults to { ignore_whitespace:false }.
 * @return {boolean} the result of the string input indicating whether or not it's empty.
 */
function isEmpty(str, options) {
  assertString_(str);
  options = merge_(options, default_is_empty_options);

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
