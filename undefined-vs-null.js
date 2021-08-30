/*
ways to get undefined
1.variable delcared but if we don't assign the value of it.
2.delcared a function but didn't write return statement for it.
3.If we just write return but don't return anything at all.
4.If we don't pass a parameter that our function needs to return 
something.
5.explicitely writing undefined.
6.accessing a property of an array that doesn't even exist.
7.acessing deleted items of an array.
8.property that doesn't even exits in an object.
*/
let first;
// console.log(first);
function second(a, b) {
  const result = a + b;
}
const res = second(10, 5);
// console.log(res);
function third(a, b) {
  if (a < b) {
    return;
  }
}
const res2 = second(3, 10);
// console.log(res2);
function fourth(x, y) {
  // console.log(x, y);
  const res3 = x + y;
  return res3;
}
const anotherResult = fourth(19);

let z = undefined;
// console.log(z);
let array = [1, 2, 3, 4];
// console.log(array[10])
delete array[1];
// console.log(array);
// console.log(array[1]);
const person = { name: 'Faisal Khan Tushar', nationality: 'Bangaldeshi' }
// console.log(person.phone);
const bloodDonationForm = { name: 'Faisal Khan Tushar', phoneNumber: '13243422', religion: null }
// console.log(bloodDonationForm.religion)