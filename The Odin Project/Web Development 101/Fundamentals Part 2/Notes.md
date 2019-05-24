# JS Fundamentals Part 2 Notes

I realized that I was taking too many notes from part 1. They will be reduced now.

## Strings

* strings are immutable.
* "" and '' can be used for strings.
* using this notation to make a string is results in a *string literal*.
* 'I've done nothing' causes an error.
* can use backslash to fix it 'I\'ve done nothing'
* adding two string numbers still results in a string type.
* use toString() to convert something to a string and Number() to convert something to a number.
* strings have a .length property
* .indexOf(string) returns the index of first occurence of the string.
* .lastindexOf(string) returns the last index.
* can also do .indexOf(string, int) to indicate a starting position. works for .lastindexOf as well.
* these return -1 if not found.
* .search(string) is similar, but it can accept regex.
* .slice(start, end) returns a substring, and it's exclusive for end. Accepts neg values.
* .substring(start, end) is similar, but it doesn't accept neg values.
* .substr(start, length) is similar to .slice()
* .replace(string) replaces the first string. It returns a new string: does not modify old string.
  It is case sensitive.
  Can use regex /i for case insensitive and /g for all instances of the string.
* .toUpperCase() and .toLowerCase() exist.
* .concat() does the same thing as +.
* .trim() can be used to remove excess spaces on left and right. "  a  " -> "a"
* .charAt(int) returns the char at int (still is type string).
* .charCodeAt(int) returns the UTF-16 code of the char.
* string[int] can also be used, and it returns a string.
* .split(string) can be used to split a string into an array. The string is what it's split by, ie. ",". It returns an object.

## Conditionals

* they can be used on strings and is based on lexicographical order. It is based upon unicode values.
* strings can be compared with numbers. In that case, the string is treated as a number.
* null == undefined returns true, while null === undefined returns false.
* for other comparisons, null -> 0 and undefined -> NaN.
* null >= 0 returns true, while both null == 0 and null > 0 return false.
* for the || logical operator, 1 means true and 0 means false. So 1 || 0 returns true.
* the same applies for &&.
* both are short-circuit in that they go from left from right and stop if true || and false for &&.
* && has higher precedence than ||
* ! has the highest precedence.
* It converts to boolean first, then reverses it.
* anything that is not false, undefined, null, 0, NaN, "", or '' returns true.
* if, else, else if, and switch statements work.
* The ternary operator also works.

See [this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) for details on escape notation.