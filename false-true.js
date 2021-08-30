/*
falsy:
number-zero(0)
false
empty string
undefined
null
NaN
==========================
truthy:
number (let it be positve or negative)
true
string (including '0',whitespace)
empty array[]
empty object

*/
let x = parseInt('Faisal Khan Tushar');
console.log('value of variable x is', x);
if (x) {
  console.log('variable is truthy')
}
else {
  console.log('variable is falsy');
}