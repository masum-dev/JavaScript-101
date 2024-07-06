'use strict';

const day1 = 'mon';
const day2 = 'tue';
const day3 = 'wed';

const openingHours = {
  //=== #3 Computed/Dynamic Property Keys
  // [ES5]
  mon: {
    open: 12,
    close: 22,
  },
  // [ES6 Enhancement]
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

  //=== #1 Object Initialization From Variables
  // [ES5]
  openingHours: openingHours,

  // [ES6 Enhancement]
  openingHours,

  //=== #2 Object Method Definition Shorthand
  // [ES5]
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // [ES6 Enhancement]
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//==================================================================
