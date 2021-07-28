// https://github.com/validatorjs/validator.js/blob/master/src/lib/isDate.js

const default_date_options = {
  format: "YYYY/MM/DD",
  delimiters: ["/", "-"],
  strictMode: false,
};

function isValidFormat_(format) {
  return /(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/gi.test(
    format
  );
}

function zip_(date, format) {
  const zippedArr = [],
    len = Math.min(date.length, format.length);

  for (let i = 0; i < len; i++) {
    zippedArr.push([date[i], format[i]]);
  }

  return zippedArr;
}

/**
 * Check if the input string is a valid date.
 *
 * @param {string} input the string input.
 * @param {Object} options options is an object which can contain the keys format (a string value that defaults to YYYY/MM/DD), strictMode (a boolean that defaults to false. If strictMode is set to true, the validator will reject inputs different from format) and/or delimiters (an array of allowed date delimiters and defaults to ['/', '-']).
 * @return {boolean} the result of the string input indicating whether or not it's a valid date.
 */
function isDate(input, options) {
  if (typeof options === "string") {
    // Allow backward compatbility for old format isDate(input [, format])
    options = merge_({ format: options }, default_date_options);
  } else {
    options = merge_(options, default_date_options);
  }
  if (typeof input === "string" && isValidFormat_(options.format)) {
    const formatDelimiter = options.delimiters.find(
      (delimiter) => options.format.indexOf(delimiter) !== -1
    );
    const dateDelimiter = options.strictMode
      ? formatDelimiter
      : options.delimiters.find((delimiter) => input.indexOf(delimiter) !== -1);
    const dateAndFormat = zip_(
      input.split(dateDelimiter),
      options.format.toLowerCase().split(formatDelimiter)
    );
    const dateObj = {};

    for (const [dateWord, formatWord] of dateAndFormat) {
      if (dateWord.length !== formatWord.length) {
        return false;
      }

      dateObj[formatWord.charAt(0)] = dateWord;
    }

    return (
      new Date(`${dateObj.m}/${dateObj.d}/${dateObj.y}`).getDate() ===
      +dateObj.d
    );
  }

  if (!options.strictMode) {
    return (
      Object.prototype.toString_.call(input) === "[object Date]" &&
      isFinite(input)
    );
  }

  return false;
}
