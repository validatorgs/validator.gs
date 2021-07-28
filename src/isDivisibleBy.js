// https://github.com/validatorjs/validator.js/blob/master/src/lib/isDivisibleBy.js

/**
 * Check if the input string is a number that's divisible by another.
 *
 * @param {string} str the string input.
 * @param {number} num num is a number by which to check if the input is divisible by.
 * @return {boolean} the result of the string input indicating whether or not it's divisible by the number.
 */
function isDivisibleBy(str, num) {
  assertString_(str);
  return toFloat_(str) % parseInt(num, 10) === 0;
}
