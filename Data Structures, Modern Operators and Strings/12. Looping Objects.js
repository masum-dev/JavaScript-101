'use strict';

///=== Looping over Objects (Not Iterable) in an Indirect way

//==================================================================

const day1 = 'mon';
const day2 = 'tue';
const day3 = 'wed';

const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },

  [day2]: {
    open: 11,
    close: 23,
  },

  [day3]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//==================================================================
//=== Object.keys(), Object.values(), Object.entries()
// will return the keys, values & whole Object in a form of Array.
// Hence, we can loop over them using a for...of loop

//=== Property NAMES
const properties = Object.keys(openingHours);

console.log(properties);
// [ 'mon', 'tue', 'wed' ]

//=== Property VALUES
const values = Object.values(openingHours);

console.log(values);
// [
//   { open: 12, close: 22 },
//   { open: 11, close: 23 },
//   { open: 0, close: 24 }
// ]

//=== Whole Object
const entry = Object.entries(openingHours);

console.log(entry);
// [
//   [ 'mon', { open: 12, close: 22 } ],
//   [ 'tue', { open: 11, close: 23 } ],
//   [ 'wed', { open: 0, close: 24 } ]
// ]

// e.g. Looping over Object
for (let [day, { open, close }] of entry) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}
