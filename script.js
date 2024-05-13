let age = 25;

const birthYear = 1995;

console.log('Age', age);

let sum = age + 5
console.log ('Your age in 5 years is', sum);

if (age < 18 || age > 30) {
    console.log('You have access to the adult quizzes on this site');
}

let isMinor = age < 18;
if (!isMinor) {
  console.log('You are a minor, you do not have access to the adult quizzes on this site');
  
}

let header = document.getElementById('h1');
console.log(h1);

h1.textContent = 'Welcome to Java Script!';

//let button = document.getElementById('button');

function onButtonClick() {
  alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);