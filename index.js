// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Random Password Generator</h1>`;
const outputDiv = document.getElementById('output');


const passwordGenerator = (digits = 8) => {
  
  let password = '';
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  console.log(str.length)
  for (let i = 1; i <= digits; i++) {
    const char = Math.floor(Math.random() * str.length + 1);
    password += str.charAt(char);
  }
  output.innerHTML = password;
}



const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => passwordGenerator())

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const digitVal = parseInt(document.getElementById('digitVal').value, 10);
  passwordGenerator(digitVal);
  })


passwordGenerator();