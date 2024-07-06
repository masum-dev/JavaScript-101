'use strict';

/*
Destructuring is an ES6 feature and it is basically a way of 
unpacking values from an array or an object into seperate variables.
*/
//==================================================================
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

  orderDelivery: function ({ mainIndex, starterIndex, time, address }) {
    console.log(
      `Oder Received! Deliver at: ${address} at: ${time} with ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },
};

//=== Destructuring Object
// must use Exact Property names of the object
const { name, location, mainMenu } = restaurant;

console.log(name, location, mainMenu);

// Renaming Exact Property names to something else
const { name: restaurantName, location: address } = restaurant;

console.log(restaurantName, address);

//==================================================================
//== Setting Default Values (useful when dealing with APIs)
const { starterMenu: starters = 'No Menu', owner = 'Unknown' } = restaurant;

console.log(starters, owner);

//=== Mutating Variables
let alpha = 111;
let beta = 222;

console.log(alpha, beta); // 111 222

const obj = {
  alpha: 11,
  beta: 22,
};

({ alpha, beta } = obj); // Has to be wrapped into ( )

console.log(alpha, beta); // 11 22

//=== Nested Destructuring of Object
const {
  sat: { open, close },
} = restaurant.openingHours;

console.log(open, close);

//==================================================================
//== Passing Object into a Function (with a lot of Parameters)
// and immediately destructuring it into seprate varibles
// Benefits: Order the Parameters doesn't need to be followed

restaurant.orderDelivery({
  time: '11:50',
  address: 'Via del Sole, 21',
  mainIndex: 0,
  starterIndex: 2,
});
