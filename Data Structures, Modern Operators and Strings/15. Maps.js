'use strict';
/*
Maps: Key-Value pairs like Object. But the Key can be any data type like:
Array, Object or even Maps itself. [ES6]
*/
//==================================================================

//=== Creating Maps
// Create an empty Map
const restaurant = new Map();

// set() method to fill up the Map
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');

// Filling with set() method also returns the whole updated Map
console.log(restaurant.set('nextLocation', 'Dhaka'));

// Chaining
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(restaurant);
//==================================================================

//=== get() method to read elements from Maps
console.log(restaurant.get('name')); // Classico Italiano
console.log(restaurant.get(true)); // We are open :D
console.log(restaurant.get(false)); // We are closed :(
//==================================================================

//=== has() method to check if a Map has certain Key
console.log(restaurant.has('nextLocation')); // true
console.log(restaurant.has('owner')); // false
//==================================================================

//=== delete() method to delete elements from Map
restaurant.delete('nextLocation');

console.log(restaurant);
//==================================================================

//=== size() method to get the size of the Map
console.log(restaurant.size); // 8
//==================================================================

//=== clear() method to remove all elements from Map
restaurant.clear();
console.log(restaurant.size); // 0
//==================================================================

//=== set() method alternate to Fill Map [Array of Arrays]
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);
//==================================================================

//=== Convert Object to Map [Object.entries() returns an Array of Arrays]
const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  tue: {
    open: 11,
    close: 23,
  },
  wed: {
    open: 0,
    close: 24,
  },
};

console.log(Object.entries(openingHours)); // Returns an Array of Arrays

const openingHoursMap = new Map(Object.entries(openingHours));

console.log(openingHoursMap);
//==================================================================

//=== Iteration using for...of loop
for (let [num, language] of question) {
  if (typeof num === 'number') {
    console.log(`Answer ${num}: ${language}`);
  }
}
//==================================================================

//=== Convert Map to Array
console.log([...question]); // Returns an Array of Arrays
//==================================================================
