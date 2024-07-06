'use strict';

/* 
Rest Operator (...) basically allows to pack
all the elements of an Array or Object [Opposite of Spread Operator].
*/
//==================================================================
//=== Usage-1: Rest Pattern working with Destructuring
//=== Rest Operator [Always on the left side of the assignment operator]
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

const arr1 = [33, 44, 55];
const arr2 = [66, 77, 88, 99];

//== Rest and Spread Operator working together
// [Rest operator must be used in the last]
const [num1, , num3, ...otherNums] = [...arr1, ...arr2];

console.log(num1, num3, otherNums); // 33 55 [ 66, 77, 88, 99 ]

//==================================================================
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

//=== Rest Pattern [with Objects]
const { sat, ...weekDays } = restaurant.openingHours;

console.log(sat); // { open: 0, close: 24 }

console.log(weekDays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//==================================================================

//=== Usage-2: Rest Pattern working with Functions
// In this case, it is called "Rest Parameters"
// Allows Functions to take in arbitrary number of Arguments
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// e.g. 1
add(2, 3); // 5
add(4, 5, 6); // 15
add(2, 3, 4, 5, 6, 7); // 27

const x = [11, 22, 33];

add(...x); // e.g. Spread Opeator used to pass args into function

// e.g. 2
restaurant.orderPizza('Flour', 'Yeast', 'Basil', 'Mozzarella');
// Flour
// [ 'Yeast', 'Basil', 'Mozzarella' ]

restaurant.orderPizza('Flour');
// Flour
// []
//==================================================================
