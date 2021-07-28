// https://github.com/validatorjs/validator.js/blob/master/src/lib/toDate.js

function toDate_(date) {
  assertString_(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
