//js is a dynamically typed language 
// let a = 15;
// let a = 'Faisal Khan Tushar'
// let a = { name: 'Faisal Khan Tushar' }
// let a = false;
// console.log(typeof (a));

//primitive & non-primitive types in js
/*
data types in js(7)
1.number
2.string
3.boolean
4.undefined
5.null
6.object
7.symbol
primitive - number,string,boolean,undefined,null,symbol
non primitive- object

*/
let a = 10;
let b = a;
// console.log(a, b)
a = 20;
// console.log(a, b)
let first = { job: 'Teacher of Daffodil International University' }
let y = first;
// console.log(x, y)
// x.job = "Math's teacher in Daffodil International University"
// console.log(x, y)
y.job = "Physics teacher in Daffodil International University"
// console.log(x, y)

/* 
falsy:
zero
false
empty string
undefined
null
NaN
================
truthy:
any number but zero
true
string (including ' ' ,'0')
empty array
empty object

*/
let z = {};
console.log('the value of varaiable z is', z);
if (z) {
  console.log('value of it is truthy')
}
else {

  console.log('value of it is falsy');
}