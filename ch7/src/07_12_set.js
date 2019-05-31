// Set
var s1 = new Set();
s1.add('apple');
s1.add('pear');
s1.add('apple');
s1.add('grape');
console.log(s1); // Set { 'apple', 'pear', 'grape' }

var john = new Set(['apple', 'grape', 'pear']);
var susan = new Set(['pineapple', 'kiwi', 'pear']);

// Union (합집합)
var union = new Set([...john.values(), ...susan.values()]);
console.log(union); // Set { 'apple', 'grape', 'pear', 'pineapple', 'kiwi' }

// Intersect (교집합)
var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection); // Set { 'pear' }

// Difference (차집합)
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff); // Set { 'apple', 'grape' }