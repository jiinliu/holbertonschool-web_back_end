// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const prefix = 'This is the list of our students\n';
  try {

    const out = await countStudents(process.argv[2]);
    res.end(`${prefix}${out}`);
  } catch {
    res.end(`${prefix}Cannot load the database`);
  }
});

app.listen(1245);
module.exports = app;
