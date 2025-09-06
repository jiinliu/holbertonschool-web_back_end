const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/',(req, res) => res.type('text').send('Hello Holberton School!'))

app.get('/students', async (req, res ) => {
    res.write('This is the list of our students\n');
    try {
        const out = await countStudents(process.argv[2]);
        res.send(out);
    } catch (error) {
        res.send('Cannot load the database');
    }
});

app.listen(12345);
module.exports = app;

