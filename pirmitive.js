/*
Data types
1.number
2.string
3.boolean
4.undefined
5.null
6.object
7.symbol
primitive-
number,string,boolean,undefined, null & symbol
non primiive -
object

*/
//primitive -> has one value or one primary value. They are immutable
let a = 10;
let b = a;
// console.log(a, b)
a = 20;
// console.log(a, b)

//non pirmitive-> objects
let first = { job: 'website developer' }
let y = first;
console.log(first, y)
first.job = 'font end developer'
// console.log(x, y)
y.job = 'back end developer'
console.log(first, y);