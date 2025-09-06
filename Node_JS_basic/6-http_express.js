const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));


app.listen(12345);
module.exports = app;
