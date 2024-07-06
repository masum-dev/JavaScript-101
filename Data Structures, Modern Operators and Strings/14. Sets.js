'use strict';
/*
Sets: Collection of unique values. Introduced in ES6.
Like Array Sets are also iterables.
*/
//==================================================================
//=== Creating Sets [Inside of Set() any iterable can be passed]
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Risotto',
  'Pasta',
  'Pizza',
  'Pizza',
]);

console.log(ordersSet); // { 'Pizza', 'Pasta', 'Risotto' }

// Strings are also iterables
console.log(new Set('masum')); // { 'm', 'a', 's', 'u' }
//==================================================================
//=== Working with Sets

// Size of a Set
console.log(ordersSet.size); // 3

// Check if an element exists
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// Add new element
ordersSet.add('Garlic Bread');
console.log(ordersSet); // { 'Pizza', 'Pasta', 'Risotto', 'Garlic Bread' }

// Delete element
ordersSet.delete('Pizza');
console.log(ordersSet); // { 'Pasta', 'Risotto', 'Garlic Bread' }

// Delete all elements
// ordersSet.clear();
console.log(ordersSet);

// Retriving Values from Set:
/*
There is no need to retrive values from set as all values are unique &
there are no index of elements in Set. So, all we need to know if
an element exists in a Set or not that can be done with 'has()' method
 */

// Looping Sets
for (let order of ordersSet) {
  console.log(order);
}
//==================================================================
//=== Usage-1: Main use case is to Remove elements from Arrays
const stuff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const uniqueStuff = new Set(stuff);

console.log(uniqueStuff);

// Making an Array from a Set (with Destructuring)
const uniqueStuffArr = [...uniqueStuff];

console.log(uniqueStuffArr);
//==================================================================
