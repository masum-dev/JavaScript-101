'use strict';

//=== Nullish Coalescing Operator (??) ES2020
// Nullish Values: [Null & Undefined (NOT 0 or '')]
//==================================================================
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//==================================================================

//=== OR operator to set Default values
restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10;
console.log(guest); // 10 [but should be 0]

//=== Works just like OR but on a concept called
// Nullish Values: [Null & Undefined (NOT 0 or '')] instead of Falsy Values
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
