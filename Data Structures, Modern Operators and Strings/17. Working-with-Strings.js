'use strict';

const airline = 'TAP Air Portugal';

const plane = 'A320';

//=== Basic Stuff (like Array)
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log('B737'[0]); // A

console.log(plane.length); // 4

console.log('B737'.length); // 4
//==================================================================
//=== String Method (All are case sensitive)
//=== Index of a Char
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1
//==================================================================

//=== slice() method to Extract part of a String

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 6)); // Ai
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-3)); // gal
console.log(airline.slice(1, -1)); // AP Air Portuga
//==================================================================

//=== Chaning case

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log('masum'.toUpperCase()); // MASUM
//==================================================================

//=== Removing white space from Beginning & End

const email = '   hello@masum.dev  \n';
const correctEmail = email.trim();

console.log(correctEmail); // hello@masum.dev
//==================================================================

//=== Replace parts of String

const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');

console.log(priceUS); // 288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// const correctAnnouncement = announcement.replace('door', 'gate'); // only replaces the 1st occurrences
const correctAnnouncement = announcement.replaceAll('door', 'gate');

console.log(correctAnnouncement);
//==================================================================

//=== Checking if something is present in a String

const newPlane = 'Airbus A320neo';

console.log(newPlane.includes('A320')); // true
console.log(newPlane.includes('B320')); // false
console.log(newPlane.startsWith('Airb')); // true
console.log(newPlane.endsWith('neo')); // true
//==================================================================

//=== Spliting & Joining

console.log('a+very+nice+string'.split('+')); // [ 'a', 'very', 'nice', 'string' ]
console.log('Mahbub Alam Masum'.split(' ')); // [ 'Mahbub', 'Alam', 'Masum' ]

const [firstName, lastName] = 'Mahbub Alam'.split(' ');

const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // Mr. Mahbub ALAM

console.log(fullName);
//==================================================================

//=== Paddings
const message = 'Hello!';

console.log(message.padStart(10, '#')); // ####Hello! [ Total length will be 10 including the message ]

console.log(message.padStart(20, '+').padEnd(30, '=')); // ++++++++++++++Hello!==========

const maskCreditCard = function (cardNumber) {
  // converting the card number to string
  const cardNumberStr = cardNumber + '';

  const last4Digit = cardNumberStr.slice(-4);
  return last4Digit.padStart(cardNumberStr.length, 'X');
};

console.log(maskCreditCard(11112222));
console.log(maskCreditCard(1111222233334444));
//==================================================================

//=== Repeat method

const departureMessage = 'All departure delay... ';

console.log(departureMessage.repeat(2)); // All departure delay... All departure delay...
