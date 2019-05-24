# DOM Manipulation Notes

## What is DOM?

* Short for Document Object Model
* A tree-like representation of the contents of a webpage.
* So for a div nested in a div, then the div inside is the child.
* Can target specific nodes with selectors liek "div.display" or "#container".

## DOM methods

* element.querySelector(selector) returns a reference to first match of selector.
* element.querySelectorAll(selector) returns a reference to a nodelist of all matches. It is not an Array, but can be made into one with Array.from().
* document.createElement(tagName,[options]) makes a new element, but does not put it into DOM.
* parentNode.appendChild(childNode) appends childNode as the last child of ParentNode.
* parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode.
* parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to childNode.
* can alter or add style properties of elements, such as div.style.color.
