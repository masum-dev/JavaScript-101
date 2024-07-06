'use strict';

//=== Logical Assignment Operators (||=, &&=, ??=) ES2021
//==================================================================

const restaurant1 = {
  name: 'Capri',
  numGuests: 0,
};

const restaurant2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//==================================================================

//=== Logical OR assignment operator (||=)
// To set Default values

// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// [The uppper 2 lines can be written like below]

restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

console.log(restaurant1);
console.log(restaurant2);
//==================================================================

//=== Logical Nullish assignment operator (??=)
// To set Default values (Improved version of OR)

// restaurant1.numGuests = restaurant1.numGuests ?? 10;
// restaurant2.numGuests = restaurant2.numGuests ?? 10;

// [The uppper 2 lines can be written like below]

restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

console.log(restaurant1);
console.log(restaurant2);
//==================================================================

//=== Logical AND assignment operator (&&=)

// restaurant1.owner = restaurant1.owner && 'Anonymous';
// restaurant2.owner = restaurant2.owner && 'Anonymous';

// [The uppper 2 lines can be written like below]

restaurant1.owner &&= 'Anonymous';
restaurant2.owner &&= 'Anonymous';

console.log(restaurant1);
console.log(restaurant2);
