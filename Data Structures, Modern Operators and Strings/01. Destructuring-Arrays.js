'use strict';

/*
Destructuring is an ES6 feature and it is basically a way of 
unpacking values from an array or an object into seperate variables.
*/
//==================================================================
//=== Without Destructuring
const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c); // 1 2 3

//=== With Destructuring
const arr2 = [4, 5, 6];

const [x, y, z] = arr2;

console.log(x, y, z); // 4 5 6

//=== Orignal Array is not modified because of Destructuring
console.log(arr2); // [ 4, 5, 6 ]

//==================================================================
//=== More of Destructuring...
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//=== Getting what we only need with Destructuring
let [main, secondary] = restaurant.categories;

console.log(main, secondary); // Italian Pizzeria

//=== Skipping some elements while Destructuring
let [mainCatagory, , , secondaryCatagory] = restaurant.categories;

console.log(mainCatagory, secondaryCatagory); // Italian Organic

//=== Swapping values using Destructuring
console.log(main, secondary); // Italian Pizzeria

[main, secondary] = [secondary, main];

console.log(main, secondary); // Pizzeria Italian

//=== Function returning array and that gets immediately
// assigned to variables using Destructuring
let [starterCourse, mainCourse] = restaurant.order(2, 0);

console.log(starterCourse, mainCourse); // Garlic Bread Pizza

//==================================================================
//=== Nested Destructuring of Array

const nestedArr = [1, 2, [13, 14]];

const [i, j, [k, l]] = nestedArr;

console.log(i, j, k, l); // 1 2 13 14

//=== Setting Default Values (useful when dealing with APIs)
const nums = [21, 22];

const [p = 0, q = 0, r = -1] = nums;

console.log(p, q, r); // 21 22 -1

//==================================================================
