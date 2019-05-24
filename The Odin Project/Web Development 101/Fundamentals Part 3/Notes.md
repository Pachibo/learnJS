# JS Fundamentals Part 3 Notes

## Functions

* Functions inside objects are called methods
* You can set an event as a function.
  var myButton = document.querySelector("button");
  myButton.onclick = function() {
    alert("hi");
  }
* var hi = function() {alert("hi");} can be invoked with hi(), but this is bad practice.
* scope is important for security and to prevent bugs.
* A default parameter can be assigned for when nothing is assigned for it. It is done through = . For example:
  function print(text = "no text") {code;}
* This function would print text when text is inputted and print "no text" when nothing is in the parameter.
  A function can be used as well: text = someFunction()
* "get...", "calc...", "show...", "create...", and "check..." are common function prefixes.
* function expressions are only made when they are declared.
* function declarations are declared when JS is prepared.
* function declarations are useable only within their scope.
* can use arrow notation for function expressions.
  let function = (arg1,arg2,...) => expression;
  This returns the expression.