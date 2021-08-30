/*
null vs undefined
ways to get undefined
1.if we don't assign any kind of value to a variable.
2.if we write a function but don't return anything at all.
3.if we write return but don't return anything.
4.If we don't pass any parameter that paraemter implicitly becomes undefined.
5.If we explicitly assign undefined to a variable.
6.If we want to access an index of an array that doesn't exist at all.
7.If we want to access an element of an object that is not there.
8.If we want to access an element of an array which has been already deleted.
null
1.when we explicitly delcare it.
*/
let first;
// console.log(first);
function second(a, b) {
  const result = a + b;
  return;
}
const secondResult = second(10, 15);
// console.log(secondResult)
function fourth(x, y) {
  // console.log(x, y)
  const result = x + y;
  return result;
}
fourth(10)
let fifth = undefined;
// console.log(fifth);
let sixth = [1, 2, 3, 4];
// console.log(sixth[5])
let seventh = { name: 'Faisal Khan Tushar', phone: '34343' };
// console.log(seventh.religion);
let eight = [1, 2, 34, 56];
delete eight[1];
// console.log(eight)
// console.log(eight[1])
let whenWillWeGetNull = { name: 'Faisal Khan Tushar', job: null }
/*
double equal vs tripel equal
double equal=> converts the type of the data & after that it does the comparision. It doesn't care about the data type.
triple equal=> compares both the value of the data also the data type of the data.
*/
const firstNumber = 0;
const secondNumber = false;
if (firstNumber === secondNumber) {
  // console.log('yes both are the same')
}
else {
  // console.log('no both are not the same')
}
//more comparision
// const firstObject = { name: 'tushar' }
// const secondObject = { name: 'tushar' }
const a = [];
const b = [];
if (a == b) {
  // console.log('yes both are the same')
}
else {
  // console.log('no both are not the same');
}

/*
local scope vs global scope & block scope & hoisting
*/
const favouriteFootballer = 'Lionel Messi'
function addition(l, m) {

  // console.log(mood)
  const result = l + m;
  // console.log(favouriteFootballer)
  if (result > 10) {
    var mood = 'jolly'
  }
  // console.log(mood);
  // console.log(l);
  return result;
}
addition(10, 20)
// console.log(mood);
// console.log(favouriteFootballer);
for (let i = 0; i < 10; i++) {

}
// console.log(i)