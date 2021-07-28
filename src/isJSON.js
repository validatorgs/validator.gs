// https://github.com/validatorjs/validator.js/blob/master/src/lib/isJSON.js

const default_json_options = {
  allow_primitives: false,
};

/**
 * Check if the input string is valid JSON (note: uses JSON.parse).
 *
 * @param {string} str the string input.
 * @param {Object} options options is an object which defaults to { allow_primitives: false }. If allow_primitives is true, the primitives 'true', 'false' and 'null' are accepted as valid JSON values.
 * @return {boolean} the result of the string input indicating whether or not it's a JSON.
 */
function isJSON(str, options) {
  assertString_(str);
  try {
    options = merge_(options, default_json_options);
    let primitives = [];
    if (options.allow_primitives) {
      primitives = [null, false, true];
    }

    const obj = JSON.parse(str);
    return primitives.includes_(obj) || (!!obj && typeof obj === "object");
  } catch (e) {
    /* ignore */
  }
  return false;
}
