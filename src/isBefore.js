// https://github.com/validatorjs/validator.js/blob/master/src/lib/isBefore.js

/**
 * Check if the input string is a date that's before the specified date.
 *
 * @param {string} str the string input.
 * @param {string} date a date to compare the input to (defaults to now).
 * @return {boolean} the result of the string input indicating whether or not it's before the date specified.
 */
function isBefore(str, date = String(new Date())) {
  assertString_(str);
  const comparison = toDate_(date);
  const original = toDate_(str);
  return !!(original && comparison && original < comparison);
}
