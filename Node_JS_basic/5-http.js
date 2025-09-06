const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') return res.end('Hello Holberton School!');

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    return countStudents(process.argv[2])
      .then((out) => res.end(out))
      .catch(() => res.end('Cannot load the database'));
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245);
module.exports = app;
