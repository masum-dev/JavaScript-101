'use strict';

/* 
Spread Operator (...) basically allows to unpack
all the elements of an Array at once.

Spread Operator works on all iterables [but NOT on Objects] of JS: Array,
Strings, Set, Map
*/
//==================================================================
const arr = [3, 4, 5];

//=== Without Spread Operator
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // or using a loop

console.log(badNewArr); // [ 1, 2, 3, 4, 5 ]

//=== With Spread Operator
const newArr = [1, 2, ...arr];

console.log(newArr); // [ 1, 2, 3, 4, 5 ]

//==================================================================
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you Pasta made with ${ing1}, ${ing2} and ${ing3}`);
  },
};

//=== Usage-1: Expending an Array
const newMainMenu = [...restaurant.mainMenu, 'Gnooci'];

console.log(newMainMenu);

//=== Copy Arrays [Shallow Copy]
const mainMenuCopy = [...restaurant.mainMenu];

//=== Joining 2 Arrays
const menu = [...restaurant.mainMenu, restaurant.starterMenu];

// //=== Usage-2: Passing arguments into Functions
// e.g. 1
console.log(...newArr); // 1 2 3 4 5

const ingredients = ['Mushrooms', 'Cheese', 'Parmesan'];

// e.g. 2
restaurant.orderPasta(...ingredients); // Here is you Pasta made with Mushrooms, Cheese and Parmesan
