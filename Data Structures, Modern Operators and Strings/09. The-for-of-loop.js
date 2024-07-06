'use strict';

const menu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];

//=== for of Loop [ES6 Feature]
for (let item of menu) {
  console.log(item);
}

//=== Accessing Index (i) of the elements
for (let item of menu.entries()) {
  console.log(item);
}

//Output:
// [ 0, 'Focaccia' ]
// [ 1, 'Bruschetta' ]
// [ 2, 'Garlic Bread' ]
// [ 3, 'Caprese Salad' ]

///=== Example usage with Destructuring
for (let [i, food] of menu.entries()) {
  console.log(`Item No: ${i + 1} is ${food} on Menu`);
}

//Output:
// Item No: 1 is Focaccia on Menu
// Item No: 2 is Bruschetta on Menu
// Item No: 3 is Garlic Bread on Menu
// Item No: 4 is Caprese Salad on Menu
//==================================================================
