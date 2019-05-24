# JS Fundamentals Part 1 Notes

## JS Numbers and Operations

* There is no differentiation between integers and floats in JS.
* scientific notation can be done with e, such as 1e3 -> 1000 and 123e-3 -> 0.123.
* numbers are 64 bit. 52 bits for value, 11 bits for exponent, and 1 bit for sign.
* integers are accurate up to 15 digits
* max decimals is 17, but not always accurate
* The "+" operator is for both addition and concatenated. Numbers are added and strings are con'd.
* operations run from left -> right, so 2+1+"5" = 35
* In addition, string + num -> string.
* For -, *, and /, strings will be converted to numbers.
* "NaN" means not a number. The function isNaN() returns true if not a number. NaN is also treated as a number.
* Infinity or -Infinity is of type number, and it is returned when a number outside largest possible number is calculated.
* Dividing by zero also returns Infinity.
* Hexadecimal: precede by 0x.
* toString() can be used for base 2 to 36.
* var num = 32; num.toString(10) -> 32
* num.toString(2) -> 100000.
* Number objects can also be made by new Number(num). However, this is not recommended.
* == is equality for value. === is equality for value and type.
* the = operator also returns the value, so it's possible to have more than one = in an expression.
* Bitwise operators are also supported.
* The comma can separate things, such as in a for loop: for (a=1, b=3, c=a*b; a<5; a++)

See [this link](https://www.w3schools.com/js/js_arithmetic.asp) for operators and their precedence.

## JS Variables

* The **let** keyword is used for declaring a variable that will likely be altered.
* Multiple variables can be declared in one line:
**let** name = "Si Hou", gender = "male";
* **var** also exists, and it can penetrate functions. For example, if **var** i was used for a for loop, then i still exists out of the loop.
* **var** is also always processed first, so order of it doesnt really matter.
* variable names must contain only letters, digits or $ and _.
The first character cannot be a digit.
* Multiple words are typically chainedLikeThis.
* Variables are case-sensitive.
* can assign a variable without **let**/**var**/**const**, but only in non-"use strict" mode. It is bad practice
* **const** can also be used to declare variables, but they cannot be changed.
* name constants with ALL_CAPS when it is known beforehand.