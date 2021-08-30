function welcomeMessage(name, greetHandler) {
  console.log(name, greetHandler)
  // console.log(greetHandler);
  greetHandler(name);
}
function greetingMorning(name) {
  console.log('good morning', name)
}
function greetAfternoon(name) {
  console.log('good afternoon', name);
}
welcomeMessage('Faisal Khan Tushar', greetingMorning);
welcomeMessage('Khadija khan', greetAfternoon);
function handleClick() {
  console.log('yes the button has been clicked')
}
document.getElementById('my-button').addEventListener('click', handleClick)