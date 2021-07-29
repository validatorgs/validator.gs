> Disclaimer: This work has been derived from the [validator.js](https://github.com/validatorjs/validator.js) project.

# validator.gs

A library of string validation for Google Apps Script.

## Strings only

**This library validates strings only.**

- If you're not sure if your input is a string, coerce it using `input + ''`
- Passing anything other than a string will result in an error.

# Table of contents

- [Installation](#installation)
    - [Usage](#usage)
- [Validators](#validators)
- [Contributing](#contributing)
- [License](#license-mit)

## Installation

This library is already published as an Apps Script, making it easy to include in your project. To add it to your script, do the following in the Apps Script code on the **New** editor:

1. Click on the ➕ &nbsp; icon next to **Libraries** on the side-bar
2. Enter the script ID `1OLVhM4V7DKQaPLM0025IO_Url3xr8QnnLqTlC7viE9AtEIIG_-IPVDY0` and click the "Look up" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Click the "Add" button.

<details>
<summary>Legacy editor</summary>

1. Click on the menu item "Resources > Libraries..."
2. In the "Find a Library" text box, enter the script ID `1OLVhM4V7DKQaPLM0025IO_Url3xr8QnnLqTlC7viE9AtEIIG_-IPVDY0` and click the "Select" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Click the "Save" button.

</details>

Alternatively, you can copy and paste the files in the [`/src`](src) directory directly into your script project.

### Usage

https://user-images.githubusercontent.com/37455462/127444395-782f008b-5851-4051-90b4-951a8fae4e80.mp4

## Validators

Here is a list of the validators currently available.

1. [isEmail](#isEmail)
2. [isURL](#isURL)
3. [isEmpty](#isEmpty)
4. [isDate](#isDate)
5. [isAfter](#isAfter)
6. [isBefore](#isBefore)
7. [isBoolean](#isBoolean)
8. [isFloat](#isFloat)
9. [isDivisibleBy](#isDivisibleBy)
10. [isJSON](#isJSON)
11. [isNumeric](#isNumeric)

### isEmail

- **Syntax**: `isEmail(str [, options])`
- **Definition**: Check if the input string is an email.
- **options** is an object which defaults to —
    ```json
    {
        "allow_display_name": false,
        "require_display_name": false,
        "allow_utf8_local_part": true,
        "require_tld": true,
        "allow_ip_domain": false,
        "domain_specific_validation": false,
        "blacklisted_chars": ""
    }
    ```
    - If `allow_display_name` is set to true, the validator will also match `Display Name <email-address>`.
    - If `require_display_name` is set to true, the validator will reject strings without the format `Display Name <email-address>`.
    - If `allow_utf8_local_part` is set to false, the validator will not allow any non-English UTF8 character in email address' local part.
    - If `require_tld` is set to false, e-mail addresses without having TLD in their domain will also be matched.
    - If `ignore_max_length` is set to true, the validator will not check for the standard max length of an email.
    - If `allow_ip_domain` is set to true, the validator will allow IP addresses in the host part.
    - If `domain_specific_validation` is true, some additional validation will be enabled, e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
    - If `blacklisted_chars` receives a string, then the validator will reject emails that include any of the characters in the string, in the name part.

[🔝](#table-of-contents)

### isURL

- **Syntax**: `isURL(str [, options])`
- **Definition**: Check if the input string is a valid URL.
- **options** is an object which defaults to —
    ```json
    {
        "protocols": ["http","https","ftp"],
        "require_tld": true,
        "require_protocol": false,
        "require_host": true,
        "require_port": false,
        "require_valid_protocol": true,
        "allow_underscores": false,
        "host_whitelist": false,
        "host_blacklist": false,
        "allow_trailing_dot": false,
        "allow_protocol_relative_urls": false,
        "disallow_auth": false,
        "validate_length": true
    }
    ```
    - `protocols` - valid protocols can be modified with this option.
    - `require_protocol` - if set as true isURL will return false if protocol is not present in the URL.
    - `require_host` - if set as false isURL will not check if host is present in the URL.
    - `require_port` - if set as true isURL will check if port is present in the URL.
    - `require_valid_protocol` - isURL will check if the URL's protocol is present in the protocols option.
    - `allow_protocol_relative_urls` - if set as true protocol relative URLs will be allowed.
    - `validate_length` - if set as false isURL will skip string length validation (2083 characters is IE max URL length).

[🔝](#table-of-contents)

### isEmpty

- **Syntax**: `isEmpty(str [, options])`
- **Definition**: Check if the input string has a length of zero.
- **options** is an object which defaults to `{ "ignore_whitespace": false }`.

### isDate

- **Syntax**: `isDate(input [, options])`
- **Definition**: Check if the input string is a valid date. e.g. [`2002-07-15`, new Date()].
- **options** is an object which can contain the keys `format`, `strictMode` and/or `delimiters`
    - `format` is a string and defaults to `YYYY/MM/DD`.
    - `strictMode` is a boolean and defaults to `false`. If `strictMode` is set to true, the validator will reject inputs different from `format`.
    - `delimiters` is an array of allowed date delimiters and defaults to `['/', '-']`.

[🔝](#table-of-contents)

### isAfter

- **Syntax**: `isAfter(str [, date])`
- **Definition**: Check if the input string is a date that's after the specified date (defaults to now).

### isBefore

- **Syntax**: `isBefore(str [, date])`
- **Definition**: Check if the input string is a date that's before the specified date (defaults to now).

### isBoolean

- **Syntax**: `isBoolean(str [, options])`
- **Definition**: Check if the input string is a boolean.
- **options** is an object which defaults to `{ "loose": false }`.
    - If loose is is set to `false`, the validator will strictly match `["true", "false", "0", "1"]`.
    - If loose is set to `true`, the validator will also match `"yes", "no"`, and will match a valid boolean string of any case. (eg: `["true", "True", "TRUE"]`).

[🔝](#table-of-contents)

### isFloat

- **Syntax**: `isFloat(str [, options])`
- **Definition**: Check if the input string is a float.
- **options** is an object which can contain the keys `min`, `max`, `gt`, and/or `lt` to validate the float is within boundaries (e.g. `{ min: 7.22, max: 9.55 }`) it also has `locale` as an option.
    - `min` and `max` are equivalent to 'greater or equal' and 'less or equal', respectively while `gt` and `lt` are their strict counterparts.
    - `locale` determine the decimal separator and is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-CA', 'fr-FR', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`.

### isDivisibleBy

- **Syntax**: `isDivisibleBy(str, number)`
- **Definition**: Check if the input string is a number that's divisible by another.

### isJSON

- **Syntax**: `isJSON(str [, options])`
- **Definition**: Check if the input string is valid JSON (note: uses JSON.parse).
- **options** is an object which defaults to `{ "allow_primitives": false }`.
    - If `allow_primitives` is `true`, the primitives 'true', 'false' and 'null' are accepted as valid JSON values.

[🔝](#table-of-contents)

### isNumeric

- **Syntax**: `isNumeric(str [, options])`
- **Definition**: Check if the input string contains only numbers.
- **options** is an object which defaults to `{ "no_symbols": false }` it also has locale as an option.
    - If `no_symbols` is true, the validator will reject numeric strings that feature a symbol (e.g. `+`, `-`, or `.`).
    - `locale` determine the decimal separator and is one of `['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fr-CA', 'hu-HU', 'it-IT', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA']`.

## Contributing

In general, we'll follow the "fork-and-pull" Git workflow:

1. Fork the repo on GitHub
2. Clone the project to your own account/machine
3. Work on your fork
    1. Make your changes and additions
    2. Add changes to README.md if needed
4. Commit changes to your own branch
5. **Make sure** you merge the latest from "upstream" and resolve conflicts if there is any
6. Push your work back up to your fork
7. Submit a Pull request so that we can review your changes

[🔝](#table-of-contents)

## License (MIT)

```
Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[🔝](#table-of-contents)