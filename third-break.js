/*
closure
*/
function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  }
}
clock1 = stopWatch();
clock2 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock2())

/* call back function
 */
function welcomeToTheClub(name, greetHandler, greethandler2, clubName) {
  console.log(greetHandler);
  greetHandler(name);
  greetPlayerWithclubName(clubName)
}
function greetThePlayer(name) {
  console.log('welcome to the club', name)
}
function greetPlayerWithclubName(clubName) {
  console.log('Welcome to', clubName);
}
welcomeToTheClub('Alex witsel', greetThePlayer, greetPlayerWithclubName, 'Bourssia Dortmund')
welcomeToTheClub('Lionel Messi', greetThePlayer, greetPlayerWithclubName, 'Paris-saint-germain');