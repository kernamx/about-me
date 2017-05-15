'use strict';

var userScr = 0;

function navy() {
  var story = prompt('Was the developer in the Navy before?');
  if (story.toUpperCase() === 'YES' || story.toUpperCase() === 'Y'){
    console.log('Like the story?: ', story);
    alert('Thank You. Call me if you want to be friends.');
    userScr++;
  } else {
    console.log(story);
    alert('Fine, I\'ll try better next time.');
  }
}

function vet() {
  var vet = prompt('Is the developer a Vet?');
  if (vet.toUpperCase() === 'YES' || vet.toUpperCase() === 'Y'){
    console.log('vet: ', vet);
    alert('You and I will get along.');
    userScr++;
  } else {
    console.log('vet: ', vet);
    alert('Stay Safe.');
  }
}


function clean() {
  var clean = prompt('Does the developer like to keep the area him clean?');
  if (clean.toUpperCase() === 'YES' || clean.toUpperCase() === 'Y'){
    console.log(clean);
    alert('Great! I like to keep my place nice and clean.  You and I will get along.');
    userScr++;
  } else {
    console.log(clean);
    alert('Please keep your area clean at least.');
  }
}


function gamer() {
  var gamer = prompt('Is the developer a gamer?');
  if (gamer.toUpperCase() === 'YES' || gamer.toUpperCase() === 'Y'){
    console.log('gamer: ', gamer);
    alert('Yup, I am a gamer.');
    userScr++;
  } else {
    console.log('gamer: ', gamer);
    alert('Good for you.  Play vedio game too much is not good for you.');
  }
}


function cook() {
  var cook = prompt('Does the developer like to cook?');
  if (cook.toUpperCase() === 'YES'){
    console.log('I like to eat, I like to cook.');
    alert('I like to eat, I like to cook.  It is fun to make new dishes.');
    userScr++;
  } else {
    console.log('learn to cook.');
    alert('Cooking is fun, you sould try it.');
  }
}


var number;
var counter = 1;

function guess() {
  while (number !== 1000){
    number = prompt(('Lets play a little game.  If you get it right, you are on your way to a happy land.  What is the developer\'s age?'));

    if (number < 1000){
      alert('You guessed it too low.  Go Up! Go Up!');
      counter++;
    } else if (number > 1000){
      alert('You guessed it too high.');
      counter++;
    } else if (number === NaN || number === null){
      alert('Please enter a number.');
      counter++;
    } else {
      alert('Congrats, You got it!');
      counter++;
      userScr++;
      break;
    }
    if (counter === 4){
      console.log(counter);
      alert('Nice try, better luck next time!');
      break;
    }
  }
}


var country = ['Japan', 'Taiwan', 'South Korea', 'Arizona', 'Fin Land', 'Ice Land'];
var flag;
var count = 1;

function lived() {
  for (var i = 0; i < country.length; i++){
    var answer = prompt('Take a guess where has the developer lived?');
    console.log('current country: ', country[i]);
    if (answer === country[i]){
      alert('Lucky guess! I bet you don\'t know my bank account numbers.');
      flag = true;
      count++;
      userScr++;
      break;
    }
    if (count === 6){
      alert('Nice try.');
      break;
    }
    if (!flag){
      alert('HA HA HA, looks like you\'ll never get my bank account numbers.');
    }
  }
}
var user = prompt('Please enter your name.')
alert('You got ' + userScr + 'out of 10 questions correct, ' + user + "." );

navy();
vet();
clean();
gamer();
cook();
guess();
lived();
