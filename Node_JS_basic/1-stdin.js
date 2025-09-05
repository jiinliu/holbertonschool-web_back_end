const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let printed = false;

rl.on('line', (line) => {
  if (!printed) {
    console.log(`Your name is: ${line.trim()}`);
    printed = true;
  }
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
