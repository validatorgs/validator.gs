// https://github.com/validatorjs/validator.js/blob/master/src/lib/isNumeric.js

const numericNoSymbols = /^[0-9]+$/;

/**
 * Check if the input string contains only numbers.
 *
 * @param {string} str the string input.
 * @param {Object} options options is an object which defaults to {no_symbols: false} it also has locale as an option. If no_symbols is true, the validator will reject numeric strings that feature a symbol (e.g. +, -, or .).
 * @return {boolean} the result of the string input indicating whether or not it contains only numbers.
 */
function isNumeric(str, options) {
  assertString_(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return new RegExp(
    `^[+-]?([0-9]*[${
      (options || {}).locale ? decimal[options.locale] : "."
    }])?[0-9]+$`
  ).test(str);
}
