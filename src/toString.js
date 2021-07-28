// https://github.com/validatorjs/validator.js/blob/master/src/lib/util/toString.js

function toString_(input) {
  if (typeof input === "object" && input !== null) {
    if (typeof input.toString === "function") {
      input = input.toString();
    } else {
      input = "[object Object]";
    }
  } else if (
    input === null ||
    typeof input === "undefined" ||
    (isNaN(input) && !input.length)
  ) {
    input = "";
  }
  return String(input);
}
