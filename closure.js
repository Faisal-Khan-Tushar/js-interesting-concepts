//closure, encapsulation, private 
function player() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  }
}
player1 = player();
player2 = player();
console.log(player2())
console.log(player1())
console.log(player1())
console.log(player1())
console.log(player1())