# Task

Near each element (on the top right) show the tooltip (div element with 'tooltip' class) that will display information about the number of symbols, that element's text contains

make this tooltip appear when mouse hovers over the element, and disappear, when mouse leaves the element

## Hints

- use textContent property to access element's text
- use absolute positioning to position the tooltip:
- use 'delegation' pattern (event bubbling) so that you'll have only one event handler of each type
