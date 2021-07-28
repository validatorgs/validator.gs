// https://github.com/validatorjs/validator.js/blob/master/src/lib/isFloat.js

/**
 * Check if the input string is a float.
 *
 * @param {string} str the string input.
 * @param {Object} options options is an object which can contain the keys min, max, gt, and/or lt to validate the float is within boundaries (e.g. { min: 7.22, max: 9.55 }) it also has locale as an option.
 * @return {boolean} the result of the string input indicating whether or not it's a boolean value.
 */
function isFloat(str, options) {
  assertString_(str);
  options = options || {};
  const float = new RegExp(
    `^(?:[-+])?(?:[0-9]+)?(?:\\${
      options.locale ? decimal[options.locale] : "."
    }[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$`
  );
  if (str === "" || str === "." || str === "-" || str === "+") {
    return false;
  }
  const value = parseFloat(str.replace(",", "."));
  return (
    float.test(str) &&
    (!options.hasOwnProperty("min") || value >= options.min) &&
    (!options.hasOwnProperty("max") || value <= options.max) &&
    (!options.hasOwnProperty("lt") || value < options.lt) &&
    (!options.hasOwnProperty("gt") || value > options.gt)
  );
}

const locales = Object.keys(decimal);
