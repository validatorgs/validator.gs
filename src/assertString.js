// https://github.com/validatorjs/validator.js/blob/master/src/lib/util/assertString.js

// https://github.com/validatorjs/validator.js/blob/4db2711c416b4ddbe47439a78694fcaad82a4cbb/validator.js#L1-L22

/*!
 * Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function assertString_(input) {
  const isString = typeof input === "string" || input instanceof String;

  if (!isString) {
    let invalidType = typeof input;
    if (input === null) invalidType = "null";
    else if (invalidType === "object") invalidType = input.constructor.name;

    throw new TypeError(`Expected a string but received a ${invalidType}`);
  }
}
