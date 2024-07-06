'use strict';

///=== Optional Chaining (?.) [ES2020]
// If a certain property does not exists (exists means Nullish concept) 'Undefined' will be returned immediately
// Usage: To check if a certain property exists or not in an Object.
// [Useful in real world application where there are deeply nested Objects will lots of optional properties]
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

//=== Without Optional Chaining
if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open); // Prints Nothing
}

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open); // 12
}

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open); // 12
}

//=== With Optional Chaining
// [Checks if 'fri' exists. If not returns 'Undefined']
console.log(restaurant.openingHours.fri?.open); // Undefined

console.log(restaurant.openingHours.mon?.open); // 12

// Multiple Optional Chaining
console.log(restaurant.openingHours?.mon?.open); // 12
//==================================================================

//=== Usage-1: Optional Chainging & Nullish Coalescing Operator working together

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);
}

//=== Usage-2: Method existance check

console.log(restaurant.order?.(0, 1) ?? 'Method Does not exist.'); // [ 'Focaccia', 'Pasta' ]

console.log(restaurant.orderRice?.(0, 1) ?? 'Method Does not exist.'); // Method Does not exist.

//=== Usage-3: To check is an Array is empty

const users = [
  { name: 'Masum', email: 'hello@masum.dev' },
  { name: 'Jonas', email: 'hello@jonas.io' },
];

console.log(users[0]?.name ?? 'Array is empty.'); // Masum

const loggedInUsers = [];

console.log(loggedInUsers[0]?.name ?? 'Array is empty.'); // Array is empty.
